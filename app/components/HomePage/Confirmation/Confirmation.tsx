import React from 'react';
import { useSpring, animated } from 'react-spring';


interface ConfirmationProps {
    squadName: string;
    squadMaster: string;
    squadMember2: string;
    squadMember3?: string;
    squadMember4?: string;
    squadMember5?: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({
    squadName,
    squadMaster,
    squadMember2,
    squadMember3,
    squadMember4,
    squadMember5,
  }) => {
    // Use react-spring to animate the checkmark opacity
    const { opacity } = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 },
    });
  
    return (
        <div className="bg-gray-100 p-6 rounded-lg text-center">
            {/* Display squad details */}
            <div className="mb-6">
                <p className="mb-2">Squad Name: {squadName}</p>
                <p className="mb-2">Squad Master: {squadMaster}</p>
                {squadMember2 && <p className="mb-2">Squad Member 2: {squadMember2}</p>}
                {squadMember3 && <p className="mb-2">Squad Member 3: {squadMember3}</p>}
                {squadMember4 && <p className="mb-2">Squad Member 4: {squadMember4}</p>}
                {squadMember5 && <p className="mb-2">Squad Member 5: {squadMember5}</p>}
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
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                />
                </svg>
            </animated.div>
        </div>
    );
};
  
  export default Confirmation;
