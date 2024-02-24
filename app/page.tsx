"use client";

import React from 'react';

import Navbar from './components/HomePage/Navbar/Navbar';
import RegistrationForm from './components/HomePage/RegistrationForm/RegistrationForm';
import Footer from './components/HomePage/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>

      <Navbar />
      <RegistrationForm />
      <Footer />

    </div>
  );
};

export default HomePage;