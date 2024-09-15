import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Hero = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="max-w-screen-xl bg-white mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
            <section className="mt-10 mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                <motion.div
                    className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    <motion.p className="mb-4 font-semibold text-sky-800 md:mb-6 md:text-lg xl:text-xl"
                        transition={{ duration: 1.8, delay: 0.2 }}
                    >
                        Join the Future of Innovation
                    </motion.p>
                    <motion.h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl"
                        transition={{ duration: 2, delay: 0.4 }}
                    >
                        Unlock your potential with IEEE SRM
                    </motion.h1>
                </motion.div>
                <motion.div
                    className="h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-full xl:w-5/12"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    transition={{ duration: 2.5, delay: 0.5 }}
                >
                    <img
                        src="/assets/IEEE/img/Recruitment-Hero.png"
                        loading="lazy"
                        alt="Recruitment-IEEE SRM"
                        className="h-full w-full object-cover object-center"
                    />
                </motion.div>
            </section>

            <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
                <div className="-mx-6 grid grid-cols-3 gap-4 md:-mx-8 md:flex md:divide-x">
                    {[
                        { label: '200+', sublabel: 'Members' },
                        { label: '27+', sublabel: 'Events Hosted' },
                        { label: '11+', sublabel: 'Technical Chapters' },
                        { label: '260+', sublabel: 'Projects Completed' },
                        { label: '40+', sublabel: 'Industry Collaborations' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="px-6 md:px-8"
                            initial="hidden"
                            animate={controls}
                            variants={fadeInUp}
                            transition={{ duration: 2, delay: 0.4 * idx }}
                        >
                            <span className="block text-center text-lg font-bold text-sky-800 md:text-left md:text-xl">
                                {item.label}
                            </span>
                            <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                                {item.sublabel}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Hero;