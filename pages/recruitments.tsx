import React from 'react';
import Head from 'next/head';

import Hero from '@/app/components/Recruitments/Hero/Hero';
import RecruitmentForm from '@/app/components/Recruitments/RecruitmentForm/RecruitmentForm';
import Footer from '@/app/components/Recruitments/Footer/Footer';

import '../app/globals.css';

const Contact = () => {
    return (
        <div className="bg-white">
            <Head>
                <title>Recruitments 2024 | IEEE SRM</title>
                <meta name="description" content="Join IEEE SRM Student Branch for 2024 recruitments. Discover opportunities to grow, collaborate, and innovate with fellow tech enthusiasts and professionals." />
                <meta name="keywords" content="Recruitments 2024, IEEE SRM Student Branch, Join IEEE SRM, Student Collaboration, Tech Opportunities, IEEE Membership, Professional Development, Skill Enhancement, Tech Enthusiasts, Leadership Opportunities, Student Network, Innovation, Learning and Growth, Team Building, Industry Connections, Inclusivity in Tech, Women in Technology, Career Growth, Mentorship Programs, Networking, Technical Skills, Leadership Roles, IEEE SRM Recruitments, College Tech Clubs, Student Branch Opportunities" />
                <link rel="icon" href="/favicon.ico?v=2" />
            </Head>

            <header className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4">
                <div className="mx-auto flex items-center justify-between">
                    <img
                        src="/assets/IEEE/Logo/IEEE-LOGO.svg"
                        alt="IEEE SRM SB Logo"
                        className="h-8 md:h-12"
                    />
                    <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-sky-800 text-white font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="/contact"
                    >
                        Contact Us
                    </a>
                </div>
            </header>

            <Hero />
            <RecruitmentForm />
            <Footer />
        </div>
    );
};

export default Contact;