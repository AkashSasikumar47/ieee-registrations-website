import React from 'react'
import { useState, useEffect } from 'react';
import ModalPopup from '../ModalPopup/ModalPopup';
import { db } from '../../../firebase_config';
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import Confirmation from '../Confirmation/Confirmation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
    name?: string;
    registerNumber?: string;
    email?: string;
    department?: string;
    contactNumber?: string;
}

interface TeamDetails {
    teamName: string;
    teamSize: number;
    teamMember1: TeamMember;
    teamMember2?: TeamMember;

    teamTicket?: string;

    [key: string]: any;
}

const RegistrationForm = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [done, isDone] = useState(false);

    async function registerTeam(teamDetails: TeamDetails) {
        try {
            const teamNamesDocRef = doc(collection(db, "metadata_2024"), "protocol_1_team_names");
            const teamNamesDocSnapshot = await getDoc(teamNamesDocRef);
            let teamCount: number;

            if (teamNamesDocSnapshot.exists()) {
                const teamNamesArray = teamNamesDocSnapshot.data().teamNames;
                if (teamNamesArray.includes(teamDetails.teamName)) {
                    throw new Error("Team name already exists. Please choose a different name.");
                }
                teamCount = teamNamesArray.length;
                await updateDoc(teamNamesDocRef, {
                    teamNames: [...teamNamesArray, teamDetails.teamName]
                });
            } else {
                throw new Error("Connot get Team document. Try again later.");
            }

            const teamDocName = `${teamCount.toString()}-${teamDetails.teamName}`;
            const teamDocRef = doc(db, 'protocol_1', teamDocName);
            await setDoc(teamDocRef, { teamDetails });
            console.log("Document written with ID: ", teamDocName);
            return true;

        } catch (e) {
            if (e instanceof Error) {
                console.error("Error adding document: ", e);
                setErrorMessage(e.message);
            } else {
                console.error("Unknown error adding document: ", e);
                setErrorMessage("An unknown error occurred.");
            }
            setIsModalOpen(true);
            return false;
        }

    }

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
            setErrorMessage('Team Name is required');
            setIsModalOpen(true);
            return false;
        }

        if (teamDetails.teamSize < 1) {
            setErrorMessage('Select the number of team members');
            setIsModalOpen(true);
            return false;
        }

        if (!validateMember(teamDetails['teamMember1'], 1)) {
            return false;
        }

        if (teamDetails.teamSize === 2 && !validateMember(teamDetails['teamMember2'], 2)) {
            return false;
        }

        return true;
    };

    const validateMember = (member: TeamMember | undefined, memberNo: number) => {
        if (!member?.name?.trim()) {
            console.log(member);
            setErrorMessage(`Team Member ${memberNo} name is required`);
            setIsModalOpen(true);
            return false;
        }

        if (!member?.registerNumber?.trim()) {
            setErrorMessage(`Team Member ${memberNo} register number is required`);
            setIsModalOpen(true);
            return false;
        }

        if (!/^RA\d{13}$/.test(member?.registerNumber?.trim())) {
            setErrorMessage(`Team Member ${memberNo} register number should match the pattern RA followed by 13 digits`);
            setIsModalOpen(true);
            return false;
        }

        if (!member?.email?.trim()) {
            setErrorMessage(`Team Member ${memberNo} email is required`);
            setIsModalOpen(true);
            return false;
        }

        if (!/^[a-zA-Z0-9._-]+@srmist\.edu\.in$/.test(member?.email?.trim())) {
            setErrorMessage(`Team Member ${memberNo} email should match the pattern [local-part]@srmist.edu.in`);
            setIsModalOpen(true);
            return false;
        }

        if (memberNo == 1 && !member?.department?.trim()) {
            setErrorMessage(`Team Member ${memberNo} department is required`);
            setIsModalOpen(true);
            return false;
        }

        if (memberNo == 1 && (!member?.contactNumber || member?.contactNumber.trim().length !== 10)) {
            setErrorMessage('Team Member 1 contact number must be exactly 10 digits');
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

                const status = await registerTeam(teamDetails);
                await new Promise(resolve => setTimeout(resolve, 1000));

                isDone(status);
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
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4 mt-16"
        >
            {done ? <Confirmation
                teamName={teamDetails.teamName}
                teamMember1={teamDetails.teamMember1}
                teamMember2={teamDetails.teamMember2}
            /> : <div>
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
                        <input value={teamDetails.teamName} onChange={(e) => handleInputChange('teamName', e.target.value.toUpperCase())} name="team-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="team-size" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Team Size (Max-2)*</label>
                        <div className="mt-4">
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="teamSize"
                                    value="1"
                                    checked={teamDetails.teamSize === 1}
                                    onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value))}
                                    className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm text-gray-800">1</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="teamSize"
                                    value="2"
                                    checked={teamDetails.teamSize === 2}
                                    onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value))}
                                    className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm text-gray-800">2</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="members-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Member's Name*</label>
                        <input value={teamDetails.teamMember1.name} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, name: e.target.value })} name="members-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="registration-no" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Registration No*</label>
                        <input value={teamDetails.teamMember1.registerNumber} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, registerNumber: e.target.value })} name="registration-no" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="contact-number" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Contact Number*</label>
                        <input value={teamDetails.teamMember1.contactNumber} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, contactNumber: e.target.value })} type="tel" name="contact-number" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="department" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Department*</label>
                        <input value={teamDetails.teamMember1.department} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, department: e.target.value })} name="department" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="srm-email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">SRM Email ID*</label>
                        <input value={teamDetails.teamMember1.email} onChange={(e) => handleInputChange('teamMember1', { ...teamDetails.teamMember1, email: e.target.value })} type="email" name="srm-email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="member2-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's Name</label>
                        <input value={teamDetails.teamMember2?.name} onChange={(e) => handleInputChange('teamMember2', { ...teamDetails.teamMember2, name: e.target.value })} name="member2-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="member2-registration-no" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's Registration No</label>
                        <input value={teamDetails.teamMember2?.registerNumber || ''} onChange={(e) => handleInputChange('teamMember2', { ...teamDetails.teamMember2, registerNumber: e.target.value })} name="member2-registration-no" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="member2-srm-email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's SRM Email ID</label>
                        <input value={teamDetails.teamMember2?.email || ''} onChange={(e) => handleInputChange('teamMember2', { ...teamDetails.teamMember2, email: e.target.value })} type="email" name="member2-srm-email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                </form>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center mt-12">
                    <button onClick={handleSubmit} className="relative inline-block text-lg text-center group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-sans font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50" />
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                            <span className="relative">{isLoading ? 'Loading...' : 'REGISTER'}</span>
                        </span>
                        <span
                            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-xl"
                        />
                    </button>
                </div>
            </div>
            }
            {isModalOpen && (
                <ModalPopup message={errorMessage} onClose={() => setIsModalOpen(false)} />
            )}
        </motion.div>
    )
}

export default RegistrationForm;