import React from 'react';
import Head from 'next/head';

import Navbar from '@/app/components/Protocol/Navbar/Navbar';
import RegistrationForm from '@/app/components/Protocol/RegistrationForm/RegistrationForm';
import RegistrationClose from '@/app/components/Protocol/RegistrationClose/RegistrationClose';
import Footer from '@/app/components/Protocol/Footer/Footer';

import '../app/globals.css';

const Protocol = () => {
    return (
        <div>
            <Head>
                <title>PROTOCOL 1.0 | Hackathon by IEEE SRMIST</title>
                <meta name="description" content="Empower Computer Science and Engineering students to innovate and create impactful solutions using cutting-edge technologies in a supportive online environment. Join PROTOCOL 1.0 hackathon now!" />
                <meta name="keywords" content="PROTOCOL 1.0, hackathon, IEEE SRMIST, computer science, engineering, innovation, technology" />
                <link rel="icon" href="/favicon.ico?v=2" />
            </Head>

            <Navbar />
            <RegistrationClose />
            <Footer />
        </div>
    );
};

export default Protocol;