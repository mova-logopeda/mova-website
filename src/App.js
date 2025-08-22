import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from 'pages/article-page/ArticlePage.jsx';
import CookieBanner from 'components/cookie-banner/CookieBanner.jsx';
import MainPage from 'pages/main-page/MainPage.jsx';
import PrivacyPolicy from 'pages/privacy-policy/PrivacyPolicy.jsx';
import ScrollToTop from 'components/scroll-to-top/ScrollToTop.jsx';
import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';// Import global styles if needed

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // czas animacji w ms
      once: true,    // animacja tylko raz przy przewinięciu
    });
  }, []);
  return (
    <Router>
      <ScrollToTop /> 
      <CookieBanner />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
