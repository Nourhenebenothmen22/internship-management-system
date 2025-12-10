// src/components/Hero/Hero.jsx
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Background Elements */}
        <div className="hero__bg-shape hero__bg-shape--1"></div>
        <div className="hero__bg-shape hero__bg-shape--2"></div>
        <div className="hero__bg-shape hero__bg-shape--3"></div>
        
        <div className="hero__content">
          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <FaCheckCircle className="hero__eyebrow-icon" />
            <span>Internship Management System</span>
          </div>

          {/* Title */}
          <h1 className="hero__title">
            Find Your Dream
            <span className="hero__title-highlight"> Internship</span>
            <br />
            Opportunity Today!
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Connecting talented students with leading companies and experienced mentors 
            to build real-world experience and launch successful careers.
          </p>

          {/* Search Form */}
          <form className="hero__search" onSubmit={handleSearch}>
            <div className="hero__search-group">
              <FaBriefcase className="hero__search-icon" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="hero__search-input"
              />
            </div>
            
            <div className="hero__search-group">
              <FaMapMarkerAlt className="hero__search-icon" />
              <input
                type="text"
                placeholder="City, state, or remote"
                className="hero__search-input"
              />
            </div>
            
            <div className="hero__search-group">
              <FaBuilding className="hero__search-icon" />
              <select className="hero__search-select" defaultValue="">
                <option value="" disabled>
                  Select department
                </option>
                <option value="it">IT & Software</option>
                <option value="design">UI/UX Design</option>
                <option value="marketing">Digital Marketing</option>
                <option value="finance">Finance & Banking</option>
                <option value="engineering">Engineering</option>
                <option value="data">Data Science</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
              </select>
            </div>
            
            <button type="submit" className="hero__search-btn btn btn--primary">
              <FaSearch className="btn-icon" />
              Search Internships
            </button>
          </form>

          {/* Quick Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-content">
                <span className="hero__stat-number">320+</span>
                <span className="hero__stat-label">Active Internships</span>
              </div>
              <div className="hero__stat-bar"></div>
            </div>
            
            <div className="hero__stat">
              <div className="hero__stat-content">
                <span className="hero__stat-number">180+</span>
                <span className="hero__stat-label">Partner Companies</span>
              </div>
              <div className="hero__stat-bar"></div>
            </div>
            
            <div className="hero__stat">
              <div className="hero__stat-content">
                <span className="hero__stat-number">950+</span>
                <span className="hero__stat-label">Registered Students</span>
              </div>
              <div className="hero__stat-bar"></div>
            </div>
          </div>
        </div>

        {/* Trusted Partners Section */}
        <div className="hero__partners">
          <p className="hero__partners-label">
            <span className="hero__partners-label-text">Trusted by leading companies worldwide</span>
          </p>
          <div className="hero__logos">
            <div className="hero__logo-item">
              <div className="hero__logo-icon" style={{ backgroundColor: '#1DB954' }}>
                S
              </div>
              <span className="hero__logo-text">Spotify</span>
            </div>
            <div className="hero__logo-item">
              <div className="hero__logo-icon" style={{ backgroundColor: '#4A154B' }}>
                S
              </div>
              <span className="hero__logo-text">Slack</span>
            </div>
            <div className="hero__logo-item">
              <div className="hero__logo-icon" style={{ backgroundColor: '#ED2224' }}>
                A
              </div>
              <span className="hero__logo-text">Adobe</span>
            </div>
            <div className="hero__logo-item">
              <div className="hero__logo-icon" style={{ backgroundColor: '#FF6B2B' }}>
                A
              </div>
              <span className="hero__logo-text">Asana</span>
            </div>
            <div className="hero__logo-item">
              <div className="hero__logo-icon" style={{ backgroundColor: '#5E6AD2' }}>
                L
              </div>
              <span className="hero__logo-text">Linear</span>
            </div>
            <div className="hero__logo-item">
              <div className="hero__logo-icon" style={{ backgroundColor: '#0A66C2' }}>
                M
              </div>
              <span className="hero__logo-text">Microsoft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;