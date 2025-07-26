import React from 'react';
import './HeroSection.css';
import Navbar from '../Navbar/Navbar';
import heroImage from '../../../../assets/images/IMG_2122.JPG';

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
        <div className="hero-text">
          <h1>Umów się na<br />bezpłatną<br />diagnostykę mowy!</h1>
          <p>Umów się na bezpłatną diagnostykę logopedyczną i rozpoznaj drogę do pięknej mowy!</p>
          <button onClick={() => scrollToSection('booking')}>Umów się</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Logopeda z dzieckiem" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
