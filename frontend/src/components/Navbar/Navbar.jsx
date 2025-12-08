// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaBars, FaTimes, FaBriefcase, FaBuilding, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav__container">
        {/* Logo */}
        <div className="nav__logo">
          <Link to="/" className="logo-link">
            <FaBriefcase className="logo-icon" />
            <span className="logo-text">Intern<span className="logo-highlight">Portal</span></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="nav__toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            onClick={closeMenu}
          >
            <FaHome className="nav__link-icon" />
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/internships" 
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            onClick={closeMenu}
          >
            <FaBriefcase className="nav__link-icon" />
            <span>Internships</span>
          </NavLink>
          
          <NavLink 
            to="/companies" 
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            onClick={closeMenu}
          >
            <FaBuilding className="nav__link-icon" />
            <span>Companies</span>
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            onClick={closeMenu}
          >
            <FaInfoCircle className="nav__link-icon" />
            <span>About</span>
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            onClick={closeMenu}
          >
            <FaEnvelope className="nav__link-icon" />
            <span>Contact</span>
          </NavLink>
        </nav>

        {/* Authentication Buttons */}
        <div className="nav__auth">
          <Link 
            to="/login" 
            className="btn btn--ghost"
            onClick={closeMenu}
          >
            <FaUser className="btn-icon" />
            <span>Login</span>
          </Link>
          
          <Link 
            to="/register" 
            className="btn btn--primary btn--glow"
            onClick={closeMenu}
          >
            <span>Register Free</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;