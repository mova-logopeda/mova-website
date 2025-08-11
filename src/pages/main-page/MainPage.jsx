import React from 'react';

import AboutSection from './components/AboutSection/AboutSection';
import ArticlesSection from './components/ArticlesSection/ArticlesSection';
import BookingSection from './components/BookingSection/BookingSection';
import Footer from '../../components/footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';



import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      
      <HeroSection />
      <AboutSection />
      <BookingSection />
      <ServicesSection />
      <ArticlesSection />
      <Footer />
      
    </div>
  );
};

export default MainPage;
