"use client";

import React from 'react';
import Head from 'next/head';

import Hero from './components/HomePage/Hero/Hero';
import FeaturedEvent from './components/HomePage/FeaturedEvent/FeaturedEvent';
import Register from './components/HomePage/Register/Register';
import Footer from './components/HomePage/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Registrations | IEEE SRM</title>
        <meta name="description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta name="keywords" content="Hackathon, Tech Challenge, Coding Competition, Innovation Contest, E-VOLVE, GenAi, Workshop, Hactrix-24, PROTOCOL 1.0, ByteBurst, Igniting Innovation, Digital Era Tech Event, Coding, Programming, Software Development, Tech Trends, Innovation Showcase, IEEE SRM Student Branch, Student Collaboration, Student Tech Enthusiasts, Student Innovation Network, Inclusivity in Tech, Diversity in Innovation, Women in Technology, Tech for All, Tech Networking, Collaboration Opportunities, Team Building, Industry Connections, Technical Skills, Learning and Growth, Skill Enhancement, Professional Development, Register for Hactrix-24, Tech Event Registration, ByteBurst Registration, Hackathon Signup, Mentorship Program, Tech Mentors, Guidance and Support, Learn from Experts, Project Awards, Recognition in Tech, Certificates for Innovation, Outstanding Projects" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Hero />
      <FeaturedEvent />
      <Register />
      <Footer />
    </div>
  );
};

export default HomePage;