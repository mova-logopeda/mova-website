import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/article-page/ArticlePage.jsx';
import CookieBanner from './components/footer/cookie-banner/CookieBanner.jsx';
import MainPage from './pages/main-page/MainPage.jsx';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.jsx';
import React from 'react';

function App() {
  return (
    <Router>
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
