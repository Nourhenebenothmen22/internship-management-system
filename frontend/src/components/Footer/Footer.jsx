import React from 'react';
import './Footer.css';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">Internship<span className="footer__logo-highlight">Manager</span></h3>
            <p className="footer__description">
              Connecting students with their dream internships and helping companies find top talent.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__link-list">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/internships" className="footer__link">Internships</Link></li>
              <li><Link to="/companies" className="footer__link">Companies</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="footer__heading">Connect With Us</h4>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link"><FaGithub /></a>
              <a href="#" className="footer__social-link"><FaLinkedin /></a>
              <a href="#" className="footer__social-link"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} InternshipManager. Made with <FaHeart className="footer__heart" /> by our Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;