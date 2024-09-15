import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Recruitments = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section
            ref={ref}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="mx-auto mb-10 text-center lg:text-left">
                    <motion.h3
                        className="mb-2 sm:mb-4 font-sans font-semibold text-cyan-500 text-xs lg:text-normal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        WE ARE RECRUITING
                    </motion.h3>
                    <motion.h2
                        className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    >
                        Join the Future of Innovation
                    </motion.h2>
                    <motion.h4
                        className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                    >
                        Unlock your potential with IEEE SRM
                    </motion.h4>
                    <div className="mt-8">
                        <a
                            href="/recruitments"
                            className="inline-block rounded-lg bg-cyan-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-sky-800 transition duration-100 hover:bg-sky-800 focus-visible:ring active:bg-sky-800 md:text-base"
                        >
                            Register Here
                        </a>
                    </div>
                </div>

                <motion.div
                    className="h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    transition={{ duration: 2.5, delay: 0.5 }}
                >
                    <img
                        src="/assets/IEEE/img/Recruitment-poster.jpeg"
                        loading="lazy"
                        alt="Recruitment-IEEE SRM"
                        className="h-full w-full object-cover object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Recruitments;