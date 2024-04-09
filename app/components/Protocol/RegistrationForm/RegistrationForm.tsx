import React from 'react'
import { useState, useEffect } from 'react';
import ModalPopup from '../ModalPopup/ModalPopup';

interface TeamDetails {
    teamName: string;
    teamSize: number;
    teamMember1: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
        contactNumber?: string;
    };
    teamMember2?: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
    };
    
    teamTicket?: string;

    [key: string]: any;
}

const RegistrationForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [done, isDone] = useState(false);

    // async function addDataToFirestore(teamDetails: teamDetails) {
    //     try {
    //         const teamNamesDocRef = doc(collection(db, "metadata"), "team_names");
    //         const teamNamesDocSnapshot = await getDoc(teamNamesDocRef);

    //         if (teamNamesDocSnapshot.exists()) {
    //             const teamNamesArray = teamNamesDocSnapshot.data().teamNames;
    //             if (teamNamesArray.includes(teamDetails.teamName)) {
    //                 throw new Error("team name already exists. Please choose a different name.");
    //             }
    //             const teamCount = teamNamesArray.length;
    //             const teamTicket = createUniqueTicket(teamDetails, teamCount);
    //             teamDetails.teamTicket = teamTicket;
    //             await updateDoc(teamNamesDocRef, {
    //                 teamNames: [...teamNamesArray, teamDetails.teamName]
    //             });
    //         } 
    
    //         const docRef = await addDoc(collection(db, "teams"), {
    //             teamDetails
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //         return true;
    
    //     } catch (e) {
    //         if (e instanceof Error) {
    //             console.error("Error adding document: ", e);
    //             setErrorMessage(e.message);
    //         } else {
    //             console.error("Unknown error adding document: ", e);
    //             setErrorMessage("An unknown error occurred.");
    //         }
    //         setIsModalOpen(true);
    //         return false;
    //     }
    
    // }

    const [teamDetails, setTeamDetails] = useState<TeamDetails>({
        teamName: '',
        teamSize: 1,
        teamMember1: {},
        teamMember2: {},
    });
    const handleInputChange = (field: string, value: any) => {
        setTeamDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const handleMemberInputChange = (memberNo: number, field: string, value: string) => {
        setTeamDetails((prev) => ({
            ...prev,
            [`teamMember${memberNo}`]: {
                ...prev[`teamMember${memberNo}`],
                [field]: value,
            },
        }));
    };

    const [selectedMembers, setSelectedMembers] = useState<number>(0);
    const setMembersNo = (no: number) => {
        setSelectedMembers(no);
        handleInputChange('teamSize', no);
    };
    useEffect(() => {
        if (selectedMembers === 1) {
            setTeamDetails((prev) => ({
                ...prev,
                teamMember2: {},
            }));
        }
    }, [selectedMembers]);

    const validateForm = () => {

        console.log(teamDetails);

        if (!teamDetails.teamName.trim()) {
            setErrorMessage('team Name is required');
            setIsModalOpen(true);
            return false;
        }

        if (teamDetails.teamSize < 1) {
            setErrorMessage('Select the number of team members');
            setIsModalOpen(true);
            return false;
        }

        if (!teamDetails.teamMember1?.contactNumber || teamDetails.teamMember1.contactNumber.trim().length !== 10) {
            setErrorMessage('Team Member 1 contact number must be exactly 10 digits');
            setIsModalOpen(true);
            return false;
        }

        if (selectedMembers) {
            for (let i = 1; i <= selectedMembers + 1; i++) {
                if (!validateMember(i)) {
                    return false;
                }
            }
        }

        return true;
    };

    const validateMember = (memberNo: number) => {
        if (!teamDetails[`teamMember${memberNo}`]?.name?.trim()) {
            setErrorMessage(`team Member ${memberNo} name is required`);
            setIsModalOpen(true);
            return false;
        }

        if (!teamDetails[`teamMember${memberNo}`]?.registerNumber?.trim()) {
            setErrorMessage(`team Member ${memberNo} register number is required`);
            setIsModalOpen(true);
            return false;
        }

        if (!/^RA\d{13}$/.test(teamDetails[`teamMember${memberNo}`]?.registerNumber?.trim())) {
            setErrorMessage(`team Member ${memberNo} register number should match the pattern RA followed by 13 digits`);
            setIsModalOpen(true);
            return false;
          }

        if (!teamDetails[`teamMember${memberNo}`]?.email?.trim()) {
            setErrorMessage(`team Member ${memberNo} email is required`);
            setIsModalOpen(true);
            return false;
        }

        if (!/^[a-zA-Z0-9._-]+@srmist\.edu\.in$/.test(teamDetails[`teamMember${memberNo}`]?.email?.trim())) {
            setErrorMessage(`team Member ${memberNo} email should match the pattern [local-part]@srmist.edu.in`);
            setIsModalOpen(true);
            return false;
          }

        if (!teamDetails[`teamMember${memberNo}`]?.department?.trim()) {
            setErrorMessage(`team Member ${memberNo} department is required`);
            setIsModalOpen(true);
            return false;
        }
        return true;
    };     

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                setIsLoading(true);

                // const status = await addDataToFirestore(squadDetails);
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // isDone(status);
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrorMessage('An error occurred. Please try again.');
                setIsModalOpen(true);
            } finally {
                setIsLoading(false);
            }
        }
    };
           

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4 mt-16">
            <div className="mx-auto mb-10 text-center">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    REGISTER
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Register for PROTOCOL 1.0
                </h2>
            </div>
            <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="team-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Team Name*</label>
                    <input value={teamDetails.teamName} onChange={(e) => handleInputChange('teamName', e.target.value.toUpperCase())} name="team-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"/>
                </div>
                <div>
                    <label htmlFor="team-size" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Team Size (Max-2)*</label>
                    <input value={teamDetails.teamSize} onChange={(e) => setMembersNo(e.target.valueAsNumber)} type="number" name="team-size" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" max="2" min="1" />
                </div>
                <div>
                    <label htmlFor="members-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Member's Name*</label>
                    <input value={teamDetails.teamMember1.name} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, name: e.target.value})} name="members-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="registration-no" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Registration No*</label>
                    <input value={teamDetails.teamMember1.registerNumber} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, registerNumber: e.target.value})} name="registration-no" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="contact-number" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Contact Number*</label>
                    <input value={teamDetails.teamMember1.contactNumber} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, contactNumber: e.target.value})} type="tel" name="contact-number" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="department" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Department</label>
                    <input value={teamDetails.teamMember1.department} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, department: e.target.value})} name="department" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="srm-email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">SRM Email ID*</label>
                    <input value={teamDetails.teamMember1.email} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, email: e.target.value})} type="email" name="srm-email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="member2-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's Name</label>
                    <input value={teamDetails.teamMember2?.name || ''} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember2, name: e.target.value})} name="member2-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="member2-registration-no" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's Registration No</label>
                    <input value={teamDetails.teamMember2?.registerNumber || ''} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember2, registerNumber: e.target.value})} name="member2-registration-no" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="member2-srm-email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's SRM Email ID</label>
                    <input value={teamDetails.teamMember2?.email || ''} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember2, email: e.target.value})} type="email" name="member2-srm-email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
            </form>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center mt-12">
                <button onClick={handleSubmit} className="relative inline-block text-lg text-center group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-sans font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50" />
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                        <span className="relative">REGISTER</span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-xl"
                    />
                </button>
            </div>
            {isModalOpen && (
                <ModalPopup message={errorMessage} onClose={() => setIsModalOpen(false)}/>
            )}
        </div>
    )
}

export default RegistrationForm