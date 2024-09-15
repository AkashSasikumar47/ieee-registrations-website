import React, { useRef } from 'react';
import domtoimage from 'dom-to-image';

interface ConfirmationProps {
    name: string;
    registerNo: string;
    email: string;
    whatsappNo: string;
    preferredDomains: string[];
}

const Confirmation: React.FC<ConfirmationProps> = ({
    name,
    registerNo,
    email,
    whatsappNo,
    preferredDomains,
}) => {

    return (
        <div className="p-6 flex flex-col items-center rounded-lg shadow-2xl text-black" style={{ maxWidth: '400px', margin: 'auto' }}>
            <div className="mb-6 w-full">
                <img src="/assets/IEEE/Logo/IEEE-LOGO.svg" alt="IEEE Logo" className="mx-auto w-48" />
                <h2 className="mt-4 text-center text-xl font-bold tracking-wide">IEEE SRM SB Registration Confirmation</h2>
            </div>

            <div className="w-full border-t-2 border-b-2 border-sky-800 py-4 mb-6">
                <p className="text-lg font-semibold">Name: {name}</p>
                <p className="text-sm">Reg No: {registerNo}</p>
                <p className="text-sm">Email: {email}</p>
                <p className="text-sm">WhatsApp: {whatsappNo}</p>
                <p className="text-sm">Interested Domains: {preferredDomains.join(', ')}</p>
            </div>

            <p className="text-center text-sm mb-6">
                Thank you for registering with IEEE SRM Student Branch! We have successfully received your details.
                Please stay tuned for further updates via email and WhatsApp.
                We look forward to having you onboard in our upcoming events and initiatives.
            </p>

            <div className="mt-4 text-center">
                <p className="text-sm mb-2">Join the official WhatsApp group for updates:</p>
                <a
                    href="https://chat.whatsapp.com/CMDNgEuBPQ8LPnG1XkOQnE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs text-green-500 hover:text-green-600 underline font-semibold pb-2 transition-transform transform hover:scale-105"
                >
                    https://chat.whatsapp.com/Ecvd5LHwtUG5Yk4Qg2FViM
                </a>
            </div>

        </div>
    );
};

export default Confirmation;