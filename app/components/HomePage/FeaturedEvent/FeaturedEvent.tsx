import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedEvent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section
            ref={ref}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <motion.h3
                    className="mb-2 sm:mb-4 font-sans font-semibold text-cyan-500 text-xs lg:text-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    REGISTER
                </motion.h3>
                <motion.h2
                    className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    Join the E-VOLVE Revolution
                </motion.h2>
                <motion.h4
                    className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                >
                    Secure your spot in this transformative Generative AI workshop. Let's create the future together!
                </motion.h4>
            </div>

            <div className="relative flex justify-center mt-6">
                <a
                    href="/evolve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-auto"
                >
                    <motion.img
                        src="/assets/Evolve/Studio-Display.png"
                        alt="E-VOLVE Workshop"
                        className="max-w-full h-auto"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    >
                        <span className="mb-16 md:mb-32 lg:mb-40 text-white font-bold text-3xl md:text-5xl lg:text-7xl hover:text-cyan-500 transition duration-300">
                            CLICK TO REGISTER
                        </span>
                    </motion.div>
                </a>
            </div>
        </section>
    );
};

export default FeaturedEvent;