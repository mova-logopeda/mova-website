import React from 'react';
import './HeroSection.css';
import Navbar from '../../../../components/Navbar/Navbar';


const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section" id="hero">
      <Navbar />
          <div className="hero-content">
          <h1>Umów się na bezpłatną diagnostykę mowy!</h1>
          <button onClick={() => scrollToSection('booking')}>Umów się</button>
          </div>  
      </div>
    
  );
};

export default HeroSection;
