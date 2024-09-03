import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const letterAnimation = {
    initial: { opacity: 0, y: -100, scale: 0.5, rotateX: -90, rotateZ: -15 },
    animate: { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateZ: 0 },
};

const Hero: React.FC = () => {

    const title = "IEEE SRM";

    return (
        <header className="relative w-full h-screen bg-cover bg-center mb-8 overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: "url('/assets/IEEE/img/Hero_Baner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36 relative z-10">
                <motion.h1
                    className="mt-18 mb-8 lg:mb-10 font-sans font-bold text-white text-6xl md:text-8xl xl:text-10xl 2xl:text-[12rem] flex"
                    initial="initial"
                    animate="animate"
                >
                    {title.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            className="inline-block"
                            variants={letterAnimation}
                            transition={{
                                duration: 4,
                                ease: [0.6, -0.05, 0.2, 1.5],
                                delay: 0.2 + index * 0.2, // Delays each letter sequentially
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotateY: 10,
                                rotateZ: 10,
                                transition: { duration: 0.5 },
                            }}
                        >
                            {letter === " " ? "\u00A0" : letter} {/* Adds a non-breaking space */}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    className="mb-2 font-sans font-medium text-white text-lg sm:text-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                >
                    Innovate. Edify. Experience. Excel
                </motion.p>
                <motion.div
                    className="animate-bounce text-white mt-12"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;