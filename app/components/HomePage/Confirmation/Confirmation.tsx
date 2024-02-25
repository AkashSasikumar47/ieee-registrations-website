import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
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
        <div className="bg-gray-100 p-6 rounded-lg text-center" ref={componentRef}>
        {/* Display squad details */}
        <div className="mb-6">
            <p className="mb-2">Squad Name: {squadName}</p>
            <p className="mb-2">Squad Master: {squadMaster}</p>
            {squadMember2 && <p className="mb-2">Squad Member 2: {squadMember2}</p>}
            {squadMember3 && <p className="mb-2">Squad Member 3: {squadMember3}</p>}
            {squadMember4 && <p className="mb-2">Squad Member 4: {squadMember4}</p>}
            {squadMember5 && <p className="mb-2">Squad Member 5: {squadMember5}</p>}
        </div>

        {/* QR Code for squad ticket */}
        <div className="mb-6">
            <QRCode value={squadTicket} />
        </div>

        {/* Animated checkmark */}
        <animated.div className="text-green-500 text-6xl" style={{ opacity }}>
            {/* Using a Tailwind CSS heroicon for checkmark */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-16 w-16 mx-auto"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
        </animated.div>

        {/* Download button */}
        <button className="mt-4 p-2 bg-blue-500 text-white" onClick={handleDownload}>
            Download as PNG
        </button>
        </div>
    );
};

export default Confirmation;
