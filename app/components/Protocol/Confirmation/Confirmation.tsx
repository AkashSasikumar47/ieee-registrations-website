import React, { useRef } from 'react';
import { useSpring } from 'react-spring';
import html2canvas from 'html2canvas';

interface TeamMember {
    name: string;
    registerNumber: string;
    email: string;
    department: string;
    contactNumber: string;
}

interface ConfirmationProps {
    teamName: string;
    teamLeader: string;
    teamMembers: TeamMember[];
}

const Confirmation: React.FC<ConfirmationProps> = ({
    teamName,
    teamLeader,
    teamMembers,
}) => {
    const { opacity } = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    const componentRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (componentRef.current) {
            const canvas = await html2canvas(componentRef.current);
            const imgData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'confirmation.png';
            a.click();
        }
    };

    return (
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-xl text-center" ref={componentRef}>
            {/* Header Section */}
            <div className="mb-4">
                <img src="/Assets/Hacktrix_Logo.svg" alt="Hackathon Logo" className="mx-auto" />
            </div>

            <h1 className="block text-2xl font-bold text-gray-800">
                Registration Successful ✅
            </h1>
            {/* Display team details */}
            <div className="mb-6 mt-2 text-normal font-semibold text-gray-600">
                <p className="mb-2">Team Name: {teamName}</p>
                <p className="mb-2">Team Leader: {teamLeader}</p>
                {/* Display team members */}
                {teamMembers.map((member, index) => (
                    <div key={index} className="mb-2">
                        <p>{`Team Member ${index + 1}: ${member.name}`}</p>
                        <p>{`Registration Number: ${member.registerNumber}`}</p>
                        <p>{`Email: ${member.email}`}</p>
                        <p>{`Department: ${member.department}`}</p>
                        <p>{`Contact Number: ${member.contactNumber}`}</p>
                    </div>
                ))}
            </div>

            {/* Download button */}
            <button
                className="w-full mt-6 mb-12 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-body font-semibold rounded-lg border border-transparent bg-orange text-white transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleDownload}
            >
                Download your Ticket
            </button>
        </div>
    );
};

export default Confirmation;
