import React, {useState, useEffect} from 'react';
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
                <title>Evolve | Hackathon by IEEE SRMIST</title>
                <meta name="description" content="Hacking makes you lose CTRL;" />
                <meta name="keywords" content="Hackathon, Tech Challenge, Coding Competition, Innovation Contest, Hactrix-24, ByteBurst, Igniting Innovation, Digital Era Tech Event, Coding, Programming, Software Development, Tech Trends, Innovation Showcase, IEEE SRM Student Branch, Student Collaboration, Student Tech Enthusiasts, Student Innovation Network, Inclusivity in Tech, Diversity in Innovation, Women in Technology, Tech for All, Tech Networking, Collaboration Opportunities, Team Building, Industry Connections, Technical Skills, Learning and Growth, Skill Enhancement, Professional Development, Register for Hactrix-24, Tech Event Registration, ByteBurst Registration, Hackathon Signup, Mentorship Program, Tech Mentors, Guidance and Support, Learn from Experts, Project Awards, Recognition in Tech, Certificates for Innovation, Outstanding Projects" />
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