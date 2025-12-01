import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Membership', path: '/membership' },
    { title: 'News & Events', path: '/news' },
    { title: 'Resources', path: '/resources' },
  ];

  const servicesLinks = [
    { title: 'Insurance Services', path: '/services/insurance' },
    { title: 'Financial Services', path: '/services/financial' },
    { title: 'Consultancy', path: '/services/consultancy' },
    { title: 'Capacity Building', path: '/services/capacity-building' },
    { title: 'Advocacy', path: '/services/advocacy' },
    { title: 'Research & Development', path: '/services/research' },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>About KUSCCO</h3>
            <p>The Kenya Union of Savings and Credit Cooperatives is the national umbrella body for SACCOs in Kenya, providing leadership and promoting the growth of a sustainable cooperative movement.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaArrowRight /> {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaArrowRight /> {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt />
                <span>KUSCCO Centre, Upper Hill<br />P.O. Box 28403-00200, Nairobi, Kenya</span>
              </li>
              <li>
                <FaPhone />
                <span>+254 20 2715685</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@kuscco.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kenya Union of Savings & Credit Cooperatives. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;