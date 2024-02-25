"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/HomePage/Navbar/Navbar';
import RegistrationForm from './components/HomePage/RegistrationForm/RegistrationForm';
import Footer from './components/HomePage/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Registrations | IEEE SRM</title>
        <meta name="description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta name="keywords" content="Registrations, IEEE SRM, innovation, ideation, opportunities, events, hackathon, workshop" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/apple-touch-icon.png" />
        <meta name="author" content="Akash Sasikumar" />
        <meta property="og:title" content="Registrations | IEEE SRM" />
        <meta property="og:description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta property="og:image" content="/Images/Event_Images/Banner1.png" />
        <meta property="og:url" content="https://registrations.ieeesrmist.com" />
      </Head>

      <Navbar />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default HomePage;