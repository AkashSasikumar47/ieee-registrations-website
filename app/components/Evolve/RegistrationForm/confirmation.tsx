import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

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
        <div className="p-4 sm:p-7 flex flex-col rounded-2xl shadow-xl bg-gray-900 text-center" ref={componentRef}>
            {/* Header Section */}
            <div className="mb-4">
                <img src="/assets/Evolve/E-VOLVE.svg" alt="E-VOLVE logo" className="mx-auto h-32" />
            </div>

            <h1 className="block text-2xl font-bold text-[#00F0FF]">
                Registration Successful ✅
            </h1>

            {/* Display squad details */}
            <div className="mb-6 mt-2 text-normal font-semibold text-white">
                <p>{name}</p>
                <p>{registerNumber}</p>
                <p>{email}</p>
                <p>{department}</p>
                <p>{contactNumber}</p>
            </div>

            {/* QR Code for squad ticket */}
            {/* <div className="mb-6 flex justify-center">
                <QRCode value={ticket} />
            </div> */}

            {/* <h2 className="block text-lg font-medium text-white">
                This QR code serves as your Ticket
            </h2> */}

            {/* Download button */}
            <button
                className="w-full gap-x-2 py-3 px-3 inline-flex justify-center items-center bg-cyan-400 text-black font-medium text-sm text-neutral-800 rounded-full focus:outline-none transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleDownload}>
                    Donwnload Confirmation
            </button>
        </div>


    );
};

export default Confirmation;