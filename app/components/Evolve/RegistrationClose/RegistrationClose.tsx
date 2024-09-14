import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RegistrationClose = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-24 mb-2 sm:mb-4 font-sans font-semibold text-cyan-500 text-xs lg:text-normal"
                >
                    REGISTRATIONS CLOSED
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl"
                >
                    Thank You for 220+ Participants!
                </motion.h2>
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg"
                >
                    Stay Tuned for beginning of E-volve
                </motion.h4>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="mt-8 gap-3 flex justify-center">
                        <div className="mt-6 gap-3 flex justify-center">
                            <a
                                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-cyan-400 text-black font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                                href="/contact"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationClose;