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
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-blur"></div>
            <h1  data-aos="fade-up" >Umów się na bezpłatną diagnostykę mowy!</h1>
            <button  onClick={() => scrollToSection('booking')}>Umów się</button>
          </div>
        </div>
      </div>
    
  );
};

export default HeroSection;
