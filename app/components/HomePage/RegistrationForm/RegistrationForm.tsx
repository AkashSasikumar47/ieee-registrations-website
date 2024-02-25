import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../../../firebase_config';
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import ModalPopup from '../ModalPopup/ModalPopup';
import Confirmation from '../Confirmation/Confirmation';


interface SquadDetails {
    squadName: string;
    squadSize: number;
    squadMaster: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
        contactNumber?: string;
    };
    squadMember2?: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
    };
    squadMember3?: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
    };
    squadMember4?: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
    };
    squadMember5?: {
        name?: string;
        registerNumber?: string;
        email?: string;
        department?: string;
    };
    squadTicket?: string;

    [key: string]: any;

}

const RegistrationForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [done, isDone] = useState(false);

    async function addDataToFirestore(squadDetails: SquadDetails) {
        try {
            const squadNamesDocRef = doc(collection(db, "metadata"), "squad_names");
            const squadNamesDocSnapshot = await getDoc(squadNamesDocRef);

            if (squadNamesDocSnapshot.exists()) {
                const squadNamesArray = squadNamesDocSnapshot.data().squadNames;
                if (squadNamesArray.includes(squadDetails.squadName)) {
                    throw new Error("Squad name already exists. Please choose a different name.");
                }
                const SquadCount = squadNamesArray.length;
                const squadTicket = createUniqueTicket(squadDetails, SquadCount);
                squadDetails.squadTicket = squadTicket;
                await updateDoc(squadNamesDocRef, {
                    squadNames: [...squadNamesArray, squadDetails.squadName]
                });
            } 
    
            const docRef = await addDoc(collection(db, "squads_test"), {
                squadDetails
            });
            console.log("Document written with ID: ", docRef.id);
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

    const [squadDetails, setSquadDetails] = useState<SquadDetails>({
        squadName: '',
        squadSize: 0,
        squadMaster: {},
        squadMember2: {},
        squadMember3: {},
        squadMember4: {},
        squadMember5: {},
    });
    const handleInputChange = (field: string, value: any) => {
        setSquadDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const handleMemberInputChange = (memberNo: number, field: string, value: string) => {
        setSquadDetails((prev) => ({
            ...prev,
            [`squadMember${memberNo}`]: {
                ...prev[`squadMember${memberNo}`],
                [field]: value,
            },
        }));
    };

    const [selectedMembers, setSelectedMembers] = useState<number>(0);
    const setMembersNo = (no: number) => {
        setSelectedMembers(no);
        handleInputChange('squadSize', no + 1);
    };
    useEffect(() => {
        if (selectedMembers + 1 === 2) {
            setSquadDetails((prev) => ({
                ...prev,
                squadMember3: {},
                squadMember4: {},
                squadMember5: {},
            }));
        } else if (selectedMembers + 1 === 3) {
            setSquadDetails((prev) => ({
                ...prev,
                squadMember4: {},
                squadMember5: {},
            }));
        } else if (selectedMembers + 1 === 4) {
            setSquadDetails((prev) => ({
                ...prev,
                squadMember5: {},
            }));
        }
    }, [selectedMembers]);

    const validateForm = () => {

        if (!squadDetails.squadName.trim()) {
            alert('Squad Name is required');
            return false;
        }

        if (squadDetails.squadSize < 2) {
            alert('Select the number of squad members');
            return false;
        }

        if (!squadDetails.squadMaster?.name?.trim()) {
            alert('Squad Master name is required');
            return false;
        }

        if (!squadDetails.squadMaster?.registerNumber?.trim()) {
            alert('Squad Master register number is required');
            return false;
        }

        if (!/^RA\d{13}$/.test(squadDetails.squadMaster?.registerNumber?.trim())) {
            alert('Squad Master register number should match the pattern RA followed by 14 digits');
            return false;
        }

        if (!squadDetails.squadMaster?.email?.trim()) {
            alert('Squad Master email is required');
            return false;
        }

        if (!/^[a-zA-Z0-9._-]+@srmist\.edu\.in$/.test(squadDetails.squadMaster?.email?.trim())) {
            alert('Squad Master email should match the pattern [local-part]@srmist.edu.in');
            return false;
        }

        if (!squadDetails.squadMaster?.department?.trim()) {
            alert('Squad Master department is required');
            return false;
        }

        if (!squadDetails.squadMaster?.contactNumber?.trim()) {
            alert('Squad Master contact number is required');
            return false;
        }

        if (selectedMembers) {
            for (let i = 2; i <= selectedMembers + 1; i++) {
                if (!validateMember(i)) {
                    return false;
                }
            }
        }

        return true;
    };

    const validateMember = (memberNo: number) => {
        if (!squadDetails[`squadMember${memberNo}`]?.name?.trim()) {
            alert(`Squad Member ${memberNo} name is required`);
            return false;
        }

        if (!squadDetails[`squadMember${memberNo}`]?.registerNumber?.trim()) {
            alert(`Squad Member ${memberNo} register number is required`);
            return false;
        }

        if (!/^RA\d{13}$/.test(squadDetails[`squadMember${memberNo}`]?.registerNumber?.trim())) {
            alert(`Squad Member ${memberNo} register number should match the pattern RA followed by 13 digits`);
            return false;
          }

        if (!squadDetails[`squadMember${memberNo}`]?.email?.trim()) {
            alert(`Squad Member ${memberNo} email is required`);
            return false;
        }

        if (!/^[a-zA-Z0-9._-]+@srmist\.edu\.in$/.test(squadDetails[`squadMember${memberNo}`]?.email?.trim())) {
            alert(`Squad Member ${memberNo} email should match the pattern [local-part]@srmist.edu.in`);
            return false;
          }

        if (!squadDetails[`squadMember${memberNo}`]?.department?.trim()) {
            alert(`Squad Member ${memberNo} department is required`);
            return false;
        }
        return true;
    };

    function createUniqueTicket(squadDetails: SquadDetails, teamCount: number): string {
        const { squadName, squadMaster } = squadDetails;
    
        const getFirstThreeLetters = (str: string) => str.slice(0, 3);
        const getLastThreeDigits = (str: string) => str.slice(-3);
    
        const ticketDetails = [
            getFirstThreeLetters(squadName),
            squadMaster?.name ? squadMaster.name.charAt(0) : '_',
            squadMaster?.registerNumber ? getLastThreeDigits(squadMaster.registerNumber) : '___',
            squadMaster?.contactNumber ? getLastThreeDigits(squadMaster.contactNumber) : '___',
            teamCount.toString(),
        ];
    
        return ticketDetails.join('_');
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                setIsLoading(true);

                const status = await addDataToFirestore(squadDetails);
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
        <div>

            <div className="max-w-[85rem] lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto bg-white font-body">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-6 mx-auto">
                    <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Hero */}
                        <div>
                            <div className="mt-4 md:mb-12 max-w-2xl">
                            <h1 className="mb-4 font-bold text-black text-4xl lg:text-5xl">
                                Hacking makes you lose CTRL: Register for <span className="text-orange">HackTrix-24</span>
                            </h1>
                                <p className="text-gray-600">
                                    Embark on a journey of innovation and collaboration by registering for HackTrix-24! This is your chance to be part of a dynamic hackathon where brilliant minds come together to push the boundaries of technology. Whether you're a coding maestro, a design virtuoso, or a visionary with big ideas, HackTrix-24 welcomes you to showcase your talents and contribute to the future of tech.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        { done ? <Confirmation 
                            squadName={squadDetails.squadName}
                            squadMaster={squadDetails.squadMaster?.name || ''}
                            squadMember2={squadDetails.squadMember2?.name || ''}
                            squadMember3={squadDetails.squadMember3?.name}
                            squadMember4={squadDetails.squadMember4?.name}
                            squadMember5={squadDetails.squadMember5?.name}
                            squadTicket={squadDetails.squadTicket || ''}
                        /> : <div>
                            <form onSubmit={handleSubmit}>
                                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-xl">
                                        <div className="text-center">
                                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                                HackTrix-24 Registration Form
                                            </h1>
                                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                Form teams, make new friends, and collaborate with like-minded peers.
                                            </p>
                                        </div>

                                        <div className="mt-5">

                                            {/* Input Field */}
                                            <div>
                                                <div className="lg:grid gap-4 lg:grid-cols-2 font-body font-normal">
                                                    <input
                                                        type="text"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Squad Name (CAPS)"
                                                        value={squadDetails.squadName}
                                                        onChange={(e) => handleInputChange('squadName', e.target.value.toUpperCase())}
                                                    />

                                                    <div className="hs-dropdown relative inline-flex">
                                                        <button
                                                            id="hs-dropdown-default"
                                                            type="button"
                                                            className="hs-dropdown-toggle py-3 px-5 inline-flex w-full items-center gap-x-8 xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 text-sm text-gray-400 rounded-full bg-white disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            <span className="flex-1">{selectedMembers ? selectedMembers + 1 : 'Squad members (2-5)'}</span>
                                                            <svg
                                                                className="hs-dropdown-open:rotate-180 size-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="m6 9 6 6 6-6" />
                                                            </svg>
                                                        </button>
                                                        <div
                                                            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                                            aria-labelledby="hs-dropdown-default">
                                                            <a
                                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-full text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                                href="#"
                                                                onClick={(e) => setMembersNo(1)}>
                                                                2
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-full text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                                href="#"
                                                                onClick={(e) => setMembersNo(2)}>
                                                                3
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-full text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                                href="#"
                                                                onClick={(e) => setMembersNo(3)}>
                                                                4
                                                            </a>
                                                            <a
                                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-full text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                                href="#"
                                                                onClick={(e) => setMembersNo(4)}>
                                                                5
                                                            </a>

                                                        </div>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Squad Master"
                                                        value={squadDetails.squadMaster.name}
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, name: e.target.value })}
                                                    />

                                                    <input
                                                        type="text"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Register Number"
                                                        value={squadDetails.squadMaster.registerNumber}
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, registerNumber: e.target.value })}
                                                    />

                                                    <input
                                                        type="text"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="SquadMaster@srmist.edu.in"
                                                        value={squadDetails.squadMaster.email}
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, email: e.target.value })}
                                                    />

                                                    <input
                                                        type="text"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Department"
                                                        value={squadDetails.squadMaster.department}
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, department: e.target.value })}
                                                    />

                                                    <input
                                                        type="text"
                                                        pattern='[0-9]{10}'
                                                        title="10-digit phone number required"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Contact Number"
                                                        value={squadDetails.squadMaster.contactNumber}
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, contactNumber: e.target.value })}
                                                    />

                                                </div>
                                                <div className="font-body font-normal">
                                                    {[...Array(selectedMembers)].map((_, index) => (
                                                        <SquadMember
                                                            key={index + 1}
                                                            memberNo={index + 2}
                                                            details={squadDetails[`squadMember${index + 2}`]}
                                                            onChange={handleMemberInputChange}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Register Button */}
                                            <div className="mt-6">
                                                <button
                                                    type="submit"
                                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-body font-semibold rounded-lg border border-transparent bg-orange text-white transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? (
                                                        <div className="flex items-center">
                                                            <span className="animate-spin mr-2">&#10227;</span> Loading
                                                        </div>
                                                    ) : (
                                                        'REGISTER'
                                                    )}
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div> }
                    </div>
                    {isModalOpen && (
                        <ModalPopup message={errorMessage} onClose={() => setIsModalOpen(false)}/>
                    )}
                </div>
            </div>

        </div>
    )
}

interface SquadMemberProps {
    memberNo: number;
    details: {
        [key: string]: string;
    };
    onChange: (memberNo: number, field: string, value: string) => void;
}

const SquadMember: React.FC<SquadMemberProps> = ({ memberNo, details, onChange }) => {

    const handleFieldChange = (field: string, value: string) => {
        onChange(memberNo, field, value);
    };

    return (
        <>
            <div className="py-3 flex items-center xs:mb-4 lg:mb-0 font-body font-semibold text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                SQUAD MEMBER #{memberNo}
            </div>
            <div className="lg:grid gap-4 lg:grid-cols-2 ">

                <input
                    type="text"
                    className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={`Squad Member ${memberNo}`}
                    value={details.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                />

                <input
                    type="text"
                    className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Register Number"
                    value={details.registerNumber}
                    onChange={(e) => handleFieldChange('registerNumber', e.target.value)}
                />

                <input
                    type="text"
                    className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={`SquadMaster${memberNo}@srmist.edu.in`}
                    value={details.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                />

                <input
                    type="text"
                    className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Department"
                    value={details.department}
                    onChange={(e) => handleFieldChange('department', e.target.value)}
                />

            </div>
        </>
    );
}

export default RegistrationForm