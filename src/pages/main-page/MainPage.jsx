// MainPage.jsx
import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import BookingSection from './components/BookingSection/BookingSection';
import ArticlesSection from './components/ArticlesSection/ArticlesSection';


import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      
      <HeroSection />
      <AboutSection />
      <BookingSection />
      <ArticlesSection />
      
    </div>
  );
};

export default MainPage;
