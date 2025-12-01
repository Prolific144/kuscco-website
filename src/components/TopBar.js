import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="contact-info">
          <span><FaPhone /> +254 20 2715685</span>
          <span><FaEnvelope /> info@kuscco.com</span>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;