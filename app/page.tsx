"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/HomePage/Navbar/Navbar';
import Hero from './components/HomePage/Hero/Hero';
import Register from './components/HomePage/Register/Register';
import Footer from './components/HomePage/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Registrations | IEEE SRM</title>
        <meta name="description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta name="keywords" content="Registrations, IEEE SRM, innovation, ideation, opportunities, events, hackathon, workshop" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/apple-touch-icon.png" />
        <meta property="og:title" content="Registrations | IEEE SRM" />
        <meta property="og:description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta property="og:image" content="/Images/Event_Images/Banner1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://registrations.ieeesrmist.com" />
      </Head>

      <Navbar />
      <Hero />
      <Register />
      <Footer />
    </div>
  );
};

export default HomePage;