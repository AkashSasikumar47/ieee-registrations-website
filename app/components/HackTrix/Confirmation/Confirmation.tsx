import React, { useRef } from 'react';
import { useSpring } from 'react-spring';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

interface ConfirmationProps {
    squadName: string;
    squadMaster: string;
    squadMember2: string;
    squadMember3?: string;
    squadMember4?: string;
    squadMember5?: string;
    squadTicket: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({
    squadName,
    squadMaster,
    squadMember2,
    squadMember3,
    squadMember4,
    squadMember5,
    squadTicket,
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
                <p className="mb-2">Squad Name: {squadName}</p>
                <p className="mb-2">Squad Master: {squadMaster}</p>
                {squadMember2 && <p className="mb-2">Squad Member 2: {squadMember2}</p>}
                {squadMember3 && <p className="mb-2">Squad Member 3: {squadMember3}</p>}
                {squadMember4 && <p className="mb-2">Squad Member 4: {squadMember4}</p>}
                {squadMember5 && <p className="mb-2">Squad Member 5: {squadMember5}</p>}
            </div>

            {/* QR Code for squad ticket */}
            <div className="mb-6 flex justify-center">
                <QRCode value={squadTicket} />
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