import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const scrollTarget = document.getElementById(targetId);
        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>kim jesteśmy</a></li>
          <li><a href="#articles" onClick={(e) => handleNavClick(e, 'articles')}>usługi</a></li>
          <li><a href="#booking" onClick={(e) => handleNavClick(e, 'booking')}>dla pacjenta</a></li>
          <li><a href="#articles" onClick={(e) => handleNavClick(e, 'articles')}>dla rodzica</a></li>
          <li><a href="#footer" onClick={(e) => handleNavClick(e, 'footer')}>kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
