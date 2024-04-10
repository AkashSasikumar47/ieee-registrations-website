import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name?: string;
    registerNumber?: string;
    email?: string;
    department?: string;
    contactNumber?: string;
}

interface ConfirmationProps {
    teamName: string;
    teamMember1: TeamMember;
    teamMember2?: TeamMember;
}

const Confirmation: React.FC<ConfirmationProps> = ({
    teamName,
    teamMember1,
    teamMember2,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4"
        >
            <div className="grid sm:gap-8 lg:grid-cols-2 py-6">
                <div className="flex flex-col justify-center mx-auto mb-10">
                    <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-normal">
                        CONFIRMATION
                    </h3>
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                        Registration Confirmation
                    </h2>
                    <div className="mb-4 md:mb-6">
                        <h4 className="font-sans font-semibold text-lg mb-2">Team Details:</h4>
                        <p className="font-sans text-gray-600">
                            <span className="font-semibold">Team Name:</span> {teamName}<br />
                            <span className="font-semibold">Team Member 1:</span> {teamMember1.name}, {teamMember1.registerNumber}, {teamMember1.email}<br />
                            {teamMember2 && (
                                <>
                                    <span className="font-semibold">Team Member 2:</span> {teamMember2.name}, {teamMember2.registerNumber}, {teamMember2.email}
                                </>
                            )}
                        </p>
                    </div>
                    <p className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-xs sm:text-base text-justify">
                        We have received your registration details, and you are now officially signed up for the hackathon. Get ready to embark on an exciting journey of innovation and collaboration with fellow participants.
                    </p>
                    <a
                        href="/"
                        className="mt-4 md:mt-6 inline-block text-blue-500 underline text-sm font-semibold hover:text-blue-700 md:text-base"
                    >
                        Go to Home
                    </a>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                    <img
                        src="/assets/Protocol/img/Registration_Confirmed.jpg"
                        loading="lazy"
                        alt="Protocol_Registration_Confirmed"
                        className="absolute inset-0 aspect-square h-full w-full object-cover object-center"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Confirmation;