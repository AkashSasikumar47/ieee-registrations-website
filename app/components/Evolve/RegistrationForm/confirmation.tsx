import React, { useRef } from 'react';
import domtoimage from 'dom-to-image';

interface ConfirmationProps {
    name: string;
    registerNumber: string;
    email: string;
    department: string;
    contactNumber: string;
    [key: string]: any;
}

const Confirmation: React.FC<ConfirmationProps> = ({
    name,
    registerNumber,
    email,
    department,
    contactNumber,
}) => {

    const componentRef = useRef(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleDownload = async () => {
        if (componentRef.current && buttonRef.current) {
            // Hide the download button before capturing the image
            buttonRef.current.style.display = 'none';

            domtoimage.toPng(componentRef.current)
                .then((imgData) => {
                    // Show the download button after the image is captured
                    buttonRef.current!.style.display = 'inline-flex';

                    const a = document.createElement('a');
                    a.href = imgData;
                    a.download = 'evolve_confirmation.png';
                    a.click();
                })
                .catch((error) => {
                    console.error('Error generating image:', error);
                    // Ensure the button is shown even if there is an error
                    buttonRef.current!.style.display = 'inline-flex';
                });
        }
    };


    return (
        <div className="p-6 flex flex-col items-center rounded-lg shadow-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white" ref={componentRef} style={{ maxWidth: '400px', margin: 'auto' }}>
            {/* Header Section */}
            <div className="mb-6 w-full">
                <img src="/assets/IEEE/Logo/IEEE-LOGO-White.png" alt="IEEE-LOGO Logo" className="mx-auto w-48" />
                <h2 className="mt-4 text-center text-xl font-bold tracking-wide text-cyan-300">Event Registration Confirmation</h2>
            </div>

            {/* Ticket Details */}
            <div className="w-full border-t-2 border-b-2 border-cyan-500 py-4 mb-6">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm">{registerNumber}</p>
                <p className="text-sm">{email}</p>
                <p className="text-sm">{department}</p>
                <p className="text-sm">{contactNumber}</p>
            </div>

            {/* Confirmation Message */}
            <p className="text-center text-sm mb-6">Thank you for registering! Your slot is being reviewed, and you will receive a confirmation email if your slot is confirmed.</p>

            {/* WhatsApp Group Link */}
            <div className="mt-4 text-center">
                <p className="text-sm mb-2">Join the official WhatsApp group for updates:</p>
                <a
                    href="https://chat.whatsapp.com/CMDNgEuBPQ8LPnG1XkOQnE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs text-green-500 hover:text-green-600 underline font-semibold pb-2 transition-transform transform hover:scale-105"
                >
                    https://chat.whatsapp.com/CMDNgEuBPQ8LPnG1XkOQnE
                </a>
            </div>

            {/* Ticket ID and Download Button */}
            <div className="flex justify-between items-center w-full mt-4">
                <button
                    ref={buttonRef}
                    className="w-full gap-x-2 py-3 px-3 inline-flex justify-center items-center bg-cyan-400 text-black font-medium text-sm text-neutral-800 rounded-full focus:outline-none transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleDownload}>
                    Download Confirmation
                </button>
            </div>
        </div>
    );
};

export default Confirmation;