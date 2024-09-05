import React from 'react';
import Head from 'next/head';

import { motion } from 'framer-motion';

import Footer from '@/app/components/HomePage/Footer/Footer';

import '../app/globals.css';

const Contact = () => {
    return (
        <div className="bg-white">
            <Head>
                <title>Contact Us | IEEE SRM</title>
                <meta name="description" content="Reach out to us for any inquiries, collaborations, or information regarding IEEE SRM Student Branch." />
                <meta name="keywords" content="Hackathon, Tech Challenge, Coding Competition, Innovation Contest, E-VOLVE, GenAi, Workshop, Hactrix-24, PROTOCOL 1.0, ByteBurst, Igniting Innovation, Digital Era Tech Event, Coding, Programming, Software Development, Tech Trends, Innovation Showcase, IEEE SRM Student Branch, Student Collaboration, Student Tech Enthusiasts, Student Innovation Network, Inclusivity in Tech, Diversity in Innovation, Women in Technology, Tech for All, Tech Networking, Collaboration Opportunities, Team Building, Industry Connections, Technical Skills, Learning and Growth, Skill Enhancement, Professional Development, Register for Hactrix-24, Tech Event Registration, ByteBurst Registration, Hackathon Signup, Mentorship Program, Tech Mentors, Guidance and Support, Learn from Experts, Project Awards, Recognition in Tech, Certificates for Innovation, Outstanding Projects" />
                <link rel="icon" href="/favicon.ico?v=2" />
            </Head>

            <header className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4">
                <div className="mx-auto flex items-center justify-between">
                    <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <img src="/assets/IEEE/Logo/IEEE-LOGO.svg" alt="IEEE SRM SB Logo" className="h-8 md:h-12" />
                    </a>
                    <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-cyan-400 text-black font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="/"
                    >
                        Go to Home
                    </a>
                </div>
            </header>

            <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
                <div className="mx-auto mb-10 items-center justify-center text-center">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-2 sm:mb-4 font-sans font-semibold text-cyan-500 text-xs lg:text-normal"
                    >
                        CONTACT US
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl"
                    >
                        Get in Touch with IEEE SRM
                    </motion.h2>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg"
                    >
                        Reach out to us for any inquiries, collaborations, or information regarding IEEE SRM Student Branch.
                    </motion.h4>
                </div>

                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-black">Our Office</h3>
                        <p className="text-gray-600">IEEE SRM Student Branch</p>
                        <p className="text-gray-600">902 CRC, Main Campus</p>
                        <p className="text-gray-600">SRM Institute of Science and Technology</p>
                        <p className="text-gray-600">Kattankulathur, Tamil Nadu, India</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-black">Email Us</h3>
                        <p className="text-gray-600">
                            <a href="mailto:ieee@srmist.edu.in" className="text-cyan-400 hover:underline">
                                ieee@srmist.edu.in
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;