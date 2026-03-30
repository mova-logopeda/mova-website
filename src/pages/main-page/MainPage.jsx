import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutSection from "pages/main-page/components/AboutSection/AboutSection";
import ArticlesSection from "pages/main-page/components/ArticlesSection/ArticlesSection";
import BookingSection from "pages/main-page/components/BookingSection/BookingSection";
import Footer from "components/footer/Footer";
import HeroSection from "pages/main-page/components/HeroSection/HeroSection";
import ServicesSection from "pages/main-page/components/ServicesSection/ServicesSection";

import "./MainPage.css";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const scrollToId = location.state.scrollToId;

      const interval = setInterval(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [location.state]);
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
