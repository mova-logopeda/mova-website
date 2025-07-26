import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo Mówi" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
