import "./Footer.css";
import React from "react";

const Footer = () => {
   const handleManageCookies = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload(); 
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image" />
        <div className="footer-text">
          <h2>NAPISZ DO NAS</h2>
          <p>Zadzwoń - 012 3456789</p>
          <p>Napisz - ciao@granbelsito.com</p>
          <div className="footer-icons">
            <i className="fa-brands fa-linkedin-in" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-twitter" />
          </div>

          <div className="privacy-link">
            <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">
              Polityka Prywatności
            </a>
            <button className="manage-cookies-btn" onClick={handleManageCookies}>
        Zarządzaj cookies
      </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
