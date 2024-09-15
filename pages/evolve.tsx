import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '@/app/components/Evolve/Navbar/Navbar';
import RegistrationForm from '@/app/components/Evolve/RegistrationForm/RegistrationForm';
import RegistrationClose from '@/app/components/Evolve/RegistrationClose/RegistrationClose';
import Footer from '@/app/components/Evolve/Footer/Footer';

import '../app/globals.css';

const Evolve = () => {

    const [registrationClose, setRegistrationClose] = useState(false);

    useEffect(() => {

    }, [registrationClose]);

    return (
        <div className='bg-black'>
            <Head>
                <title>E-VOLVE | Workshop by IEEE SRMIST</title>
                <meta name="description" content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions." />
                <meta name="keywords" content="E-VOLVE, GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop" />
                <link rel="icon" href="/favicon.ico?v=2" />
            </Head>

            <Navbar />

            {registrationClose && <RegistrationClose />}

            {!registrationClose && <RegistrationForm
                registrationClose={() => setRegistrationClose(true)}
            />}

            <Footer />
        </div>
    );
};

export default Evolve;