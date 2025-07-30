import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage.jsx';
import ArticlePage from './pages/article-page/ArticlePage.jsx';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;