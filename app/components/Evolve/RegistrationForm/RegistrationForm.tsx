import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../../../firebase_config'
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import ModalPopup from '../ModalPopup/ModalPopup';
import Confirmation from './confirmation';
import Hero_reg from './hero';


interface Details {
    name: string;
    registerNumber: string;
    email: string;
    department: string;
    contactNumber: string;
    [key: string]: any;
}

interface RegistrationFormProps {
    registrationClose: VoidFunction;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
    registrationClose,
}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const [totalParticipants, setTotalParticipants] = useState<number>(0);
    const [participantsArray, setParticipantsArray] = useState<Array<String>>([]);

    async function addDataToFirestore(participant: Details) {
        try {

            if (participantsArray.includes(participantDetails.registerNumber.trim())) {
                throw new Error("Register number already exists. If you think this is a mistake, please contact us.");
            }
            const participantsRef = doc(collection(db, "metadata_2024"), "evolve_24");
            await updateDoc(participantsRef, {
                participants: [...participantsArray, participantDetails.registerNumber]
            });

            const docRef = await addDoc(collection(db, "evolve_participants"), {
                participant
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

    const [participantDetails, setParticipantDetails] = useState<Details>({
        name: '',
        registerNumber: '',
        email: '',
        department: '',
        contactNumber: '',
        // ticket: '',
    });
    const handleInputChange = (field: keyof Details, value: string) => {
        setParticipantDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const validateForm = () => {

        if (!participantDetails.name.trim()) {
            setErrorMessage('Name is required');
            setIsModalOpen(true);
            return false;
        }


        if (!participantDetails.registerNumber?.trim()) {
            setErrorMessage('Register number is required');
            setIsModalOpen(true);
            return false;
        }

        if (!/^RA\d{13}$/.test(participantDetails.registerNumber.trim())) {
            setErrorMessage('Register number should match the pattern RA followed by 14 digits');
            setIsModalOpen(true);
            return false;
        }

        if (!participantDetails.email?.trim()) {
            setErrorMessage('Email is required');
            setIsModalOpen(true);
            return false;
        }

        if (!/^[a-zA-Z0-9._-]+@srmist\.edu\.in$/.test(participantDetails.email.trim())) {
            setErrorMessage('Email should match the pattern [local-part]@srmist.edu.in');
            setIsModalOpen(true);
            return false;
        }


        if (!participantDetails.department?.trim()) {
            setErrorMessage('Department is required');
            setIsModalOpen(true);
            return false;
        }


        if (!participantDetails.contactNumber?.trim()) {
            setErrorMessage('Contact number is required');
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

                const status = await addDataToFirestore(participantDetails);
                await new Promise(resolve => setTimeout(resolve, 1000));

                setIsDone(status);
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrorMessage('An error occurred. Please try again.');
                setIsModalOpen(true);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const participantsRef = doc(collection(db, "metadata_2024"), "evolve_24");
                const participantsSnapshot = await getDoc(participantsRef);
                if (participantsSnapshot.exists()) {
                    const participantsRegNoArray = participantsSnapshot.data().participants;
                    // setTotalParticipants(219);
                    setTotalParticipants(participantsRegNoArray.length);
                    setParticipantsArray(participantsRegNoArray);
                }
            } catch (e) {
                console.error("Error fetching total participants: ", e);
            }
        };
        fetchParticipants();
    }, []);

    useEffect(() => {
        console.log("Total participants: ", totalParticipants);
        if (totalParticipants > 220) {
            registrationClose();
        }
    }, [totalParticipants]);

    return (
        <div>
            <div className="max-w-screen-xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
                <div className="mockup-browser bg-gray-900 border border-gray-900 max-w-screen-xl">
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://evolve.ieeesrmist.com</div>
                    </div>
                    <div className="bg-black flex justify-center px-4 md:px-8 py-16">
                        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Hero */}
                            <div>
                                <div className="mt-4 md:mb-12 max-w-2xl">
                                    <h1 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                                        Explore Gen-AI Today: <br /> Join E-VOLVE
                                    </h1>
                                    <p className="mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
                                        Join us for E-Volve: A Generative AI Workshop exclusively for our college community! This is your chance to dive deep into the world of AI, collaborate with fellow students, and explore innovative ideas. Whether you're passionate about technology, eager to learn new skills, or ready to push the boundaries of AI, E-Volve is the perfect opportunity to showcase your talents and be part of something groundbreaking. Don't miss out on this exciting journey of discovery and innovation!
                                    </p>
                                </div>
                            </div>

                            {/* Form */}
                            {isDone ? (
                                <Confirmation
                                    name={participantDetails.name}
                                    registerNumber={participantDetails.registerNumber}
                                    email={participantDetails.email}
                                    department={participantDetails.department}
                                    contactNumber={participantDetails.contactNumber}
                                />
                            ) : (
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                                            <div className="p-4 sm:p-7 flex flex-col bg-gray-900 rounded-2xl shadow-xl">
                                                <div className="text-center">
                                                    <h1 className="block text-xl md:text-2xl font-bold text-white">
                                                        E-VOLVE Registration Form
                                                    </h1>
                                                    <p className="mt-2 text-sm text-white">
                                                        Register individually and be a part of our exciting Generative AI Workshop.
                                                    </p>
                                                </div>

                                                <div className="mt-5">
                                                    {/* Input Field */}
                                                    <div>
                                                        <div className="lg:grid gap-4 lg:grid-cols-2 font-body font-normal">
                                                            <input
                                                                type="text"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-full text-sm text-white placeholder-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                                                placeholder="Name"
                                                                value={participantDetails.name}
                                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                            />


                                                            <input
                                                                type="text"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-full text-sm text-white placeholder-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                                                placeholder="Register Number"
                                                                value={participantDetails.registerNumber || ''}
                                                                onChange={(e) => handleInputChange('registerNumber', e.target.value)}
                                                            />


                                                            <input
                                                                type="email"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-full text-sm text-white placeholder-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                                                placeholder="Participant's Email"
                                                                value={participantDetails.email || ''}
                                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                            />


                                                            <input
                                                                type="text"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-full text-sm text-white placeholder-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                                                placeholder="Department"
                                                                value={participantDetails.department || ''}
                                                                onChange={(e) => handleInputChange('department', e.target.value)}
                                                            />


                                                            <input
                                                                type="text"
                                                                pattern="[0-9]{10}"
                                                                title="10-digit phone number required"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-full text-sm text-white placeholder-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                                                placeholder="Contact Number"
                                                                value={participantDetails.contactNumber || ''}
                                                                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                                            />


                                                        </div>
                                                    </div>

                                                    {/* Register Button */}
                                                    <div className="mt-6">
                                                        <button
                                                            type="submit"
                                                            className="w-full gap-x-2 py-3 px-3 inline-flex justify-center items-center bg-cyan-400 text-black font-medium text-sm text-neutral-800 rounded-full focus:outline-none transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
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
                                </div>)}
                        </div>
                        {isModalOpen && (
                            <ModalPopup message={errorMessage} onClose={() => setIsModalOpen(false)} />
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}



export default RegistrationForm