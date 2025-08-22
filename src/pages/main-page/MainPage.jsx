import React from 'react';

import AboutSection from 'pages/main-page/components/AboutSection/AboutSection';
import ArticlesSection from 'pages/main-page/components/ArticlesSection/ArticlesSection';
import BookingSection from 'pages/main-page/components/BookingSection/BookingSection';
import Footer from 'components/footer/Footer';
import HeroSection from 'pages/main-page/components/HeroSection/HeroSection';
import ServicesSection from 'pages/main-page/components/ServicesSection/ServicesSection';



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
