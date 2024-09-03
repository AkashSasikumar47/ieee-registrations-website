import React, { useRef } from 'react';
import { useSpring } from 'react-spring';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

interface ConfirmationProps {
    name: string;
    registerNumber?: string;
    email?: string;
    department?: string;
    contactNumber?: string;
    ticket?: string;
    [key: string]: any;
}

const Confirmation: React.FC<ConfirmationProps> = ({
    name,
    registerNumber,
    email,
    department,
    contactNumber,
    ticket,
}) => {
    const { opacity } = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

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
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-xl text-center" ref={componentRef}>
            {/* Header Section */}
            <div className="mb-4">
                <img src="/Assets/Hacktrix_Logo.svg" alt="Hackathon Logo" className="mx-auto" />
            </div>

            <h1 className="block text-2xl font-bold text-gray-800">
                Registration Successful ✅
            </h1>
            {/* Display squad details */}
            <div className="mb-6 mt-2 text-normal font-semibold text-gray-600">
                <p>{name}</p>
                <p>{registerNumber}</p>
                <p>{email}</p>
                <p>{department}</p>
                <p>{contactNumber}</p>
            </div>

            {/* QR Code for squad ticket */}
            <div className="mb-6 flex justify-center">
                {/* <QRCode value={squadTicket} /> */}
            </div>

            <h2 className="block text-lg font-medium text-gray-800">
                This QR code serves as your Ticket
            </h2>

            {/* Download button */}
            <button
                className="w-full mt-6 mb-12 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-body font-semibold rounded-lg border border-transparent bg-orange text-white transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleDownload}>
                Download your Ticket
            </button>
        </div>


    );
};

export default Confirmation;