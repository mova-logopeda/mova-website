import "./Footer.css";
import React from "react";
import logo from '../../assets/images/logo.png'

const Footer = () => {
   const handleManageCookies = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload(); 
  };
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-image" />
          <div className="footer-text">
            <img src={logo} alt="Logo" className="footer-logo" />
            <h2>Kontakt</h2>
            <div className="footer-paragraphs" >
            <p>Zadzwoń - +48509729883</p>
            <p>Napisz - logostudio.online@gmail.com </p>
            </div>
            <div className="footer-icons">
              <a
                href="link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>

              <a
                href="https://www.instagram.com/mova.logopedaonline/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61566148492303&locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
            </div>
          </div>
          <div className="footer-bottom-links">
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
