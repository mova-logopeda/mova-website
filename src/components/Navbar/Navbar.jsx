import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Mowa
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="#about" onClick={closeMenu}>O nas</a></li>
          <li><a href="#articles" onClick={closeMenu}>Dla rodzica</a></li>
          <li><a href="#booking" onClick={closeMenu}>Umów się</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
