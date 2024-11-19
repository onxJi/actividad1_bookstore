import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <Icon icon="mdi:library" className="navbar__logo-icon"/>
            <h1 className="navbar__title">TheLibrary</h1>
          
        </div>
        < div
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar__items ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar__item">
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>
          <li className="navbar__item">
            <a>
              <Link to="/catalogos">Cátalogos</Link>
            </a>
          </li>
          <li className="navbar__item">
            <a >
              <Link to="/catalogos">Iniciar Sesión</Link>
            </a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;

