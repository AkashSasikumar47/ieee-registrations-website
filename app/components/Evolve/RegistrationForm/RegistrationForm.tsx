import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase_config';
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import ModalPopup from '../ModalPopup/ModalPopup';
import Confirmation from './confirmation';
import { motion } from 'framer-motion';
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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
        >
            <div className="max-w-screen-xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mockup-browser bg-gray-900 border border-gray-900 max-w-screen-xl"
                >
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://evolve.ieeesrmist.com</div>
                    </div>
                    <div className="bg-black flex justify-center px-4 md:px-8 py-16">
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid items-center md:grid-cols-2 gap-8 lg:gap-12"
                        >
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2.7 }}
                                    className="mt-4 md:mb-12 max-w-2xl"
                                >
                                    <h1 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                                        Explore Gen-AI Today: <br /> Join E-VOLVE
                                    </h1>
                                    <p className="mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
                                        Join us for E-Volve: A Generative AI Workshop exclusively for our college community! This is your chance to dive deep into the world of AI, collaborate with fellow students, and explore innovative ideas. Whether you're passionate about technology, eager to learn new skills, or ready to push the boundaries of AI, E-Volve is the perfect opportunity to showcase your talents and be part of something groundbreaking. Don't miss out on this exciting journey of discovery and innovation!
                                    </p>
                                </motion.div>
                            </div>

                            {isDone ? (
                                <Confirmation
                                    name={participantDetails.name}
                                    registerNumber={participantDetails.registerNumber}
                                    email={participantDetails.email}
                                    department={participantDetails.department}
                                    contactNumber={participantDetails.contactNumber}
                                />
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2.7 }}
                                >
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
                                                    <div>
                                                        <div className="lg:grid gap-4 lg:grid-cols-2 font-body font-normal">
                                                            <motion.input
                                                                initial={{ opacity: 0, y: -20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                                type="text"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-lg shadow-sm text-sm text-white"
                                                                placeholder="Name"
                                                                value={participantDetails.name}
                                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                            />
                                                            <motion.input
                                                                initial={{ opacity: 0, y: -20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.2 }}
                                                                type="text"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-lg shadow-sm text-sm text-white"
                                                                placeholder="Register Number"
                                                                value={participantDetails.registerNumber}
                                                                onChange={(e) => handleInputChange('registerNumber', e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="lg:grid gap-4 lg:grid-cols-2 mt-4 font-body font-normal">
                                                            <motion.input
                                                                initial={{ opacity: 0, y: -20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.3 }}
                                                                type="email"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-lg shadow-sm text-sm text-white"
                                                                placeholder="Email"
                                                                value={participantDetails.email}
                                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                            />
                                                            <motion.input
                                                                initial={{ opacity: 0, y: -20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.4 }}
                                                                type="text"
                                                                className="py-3 px-5 block w-full mb-4 lg:mb-0 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-lg shadow-sm text-sm text-white"
                                                                placeholder="Department"
                                                                value={participantDetails.department}
                                                                onChange={(e) => handleInputChange('department', e.target.value)}
                                                            />
                                                        </div>

                                                        <motion.input
                                                            initial={{ opacity: 0, y: -20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.3, delay: 0.5 }}
                                                            type="tel"
                                                            className="mt-4 py-3 px-5 block w-full mb-4 border border-gray-700 bg-gray-900 hover:border-gray-600 focus:border-[#00F0FF] rounded-lg shadow-sm text-sm text-white"
                                                            placeholder="Contact Number"
                                                            value={participantDetails.contactNumber}
                                                            onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                                        />
                                                    </div>

                                                    <motion.button
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.6 }}
                                                        type="submit"
                                                        disabled={isLoading}
                                                        className="mt-6 py-3 px-5 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#00F0FF] text-black hover:text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:ring-offset-2 focus:ring-offset-gray-900"
                                                    >
                                                        {isLoading ? 'Submitting...' : 'Submit'}
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RegistrationForm;