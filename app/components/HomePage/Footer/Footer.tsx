import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.footer
            ref={ref}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <div className="text-center flex flex-col items-center">
                <a
                    className="flex-none text-sm font-head font-extrabold text-orange"
                    href="https://www.ieeesrmist.com/"
                    aria-label="Brand"
                >
                    <img
                        src="/assets/IEEE/Logo/IEEE-LOGO.svg"
                        alt="IEEE SRM SB"
                        className="w-36 h-16"
                        loading="lazy"
                    />
                </a>

                <div className="mt-3">
                    <p className="mb-2 font-sans font-base text-base sm:text-lg">
                        We're part of the{' '}
                        <a
                            className="font-sans font-bold text-base sm:text-lg hover:text-blue-800"
                            href="https://www.ieee.org/"
                        >
                            IEEE
                        </a>{' '}
                        family.
                    </p>
                    <p className="font-sans font-base text-xs sm:text-base">© 2024 IEEE SRM. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;