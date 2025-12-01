import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navbarRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(dropdown);
    setHoveredItem(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 300);
  };

  const handleDropdownClick = (dropdown, e) => {
    e.preventDefault();
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setHoveredItem(null);
    } else {
      setActiveDropdown(dropdown);
      setHoveredItem(dropdown);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setHoveredItem(null);
  };

  const aboutSubmenu = [
    { title: 'Our History', path: '/about/history', icon: <FaArrowRight /> },
    { title: 'Mission & Vision', path: '/about/mission', icon: <FaArrowRight /> },
    { title: 'Board of Directors', path: '/about/board', icon: <FaArrowRight /> },
    { title: 'Management Team', path: '/about/management', icon: <FaArrowRight /> },
  ];

  const servicesSubmenu = [
    { title: 'Insurance Services', path: '/services/insurance', icon: <FaArrowRight /> },
    { title: 'Financial Services', path: '/services/financial', icon: <FaArrowRight /> },
    { title: 'Consultancy', path: '/services/consultancy', icon: <FaArrowRight /> },
    { title: 'Capacity Building', path: '/services/capacity-building', icon: <FaArrowRight /> },
    { title: 'Advocacy Services', path: '/services/advocacy', icon: <FaArrowRight /> },
    { title: 'Research Services', path: '/services/research', icon: <FaArrowRight /> },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+254 20 2715685</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@kuscco.com</span>
            </div>
          </div>
          <div className="top-bar-right">
            <span className="office-hours">Mon - Fri: 8:00 AM - 5:00 PM</span>
            <div className="social-links">
              <a 
                href="https://facebook.com/kuscco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com/kuscco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com/company/kuscco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://instagram.com/kuscco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`main-header ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>
        <div className="container header-content">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img 
                src="https://kuscco.com/images/kuscco-logo.png" 
                alt="KUSCCO Logo" 
                className="logo-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/60x60/0a3d62/ffffff?text=KUSCCO";
                }}
              />
            </Link>
            <div className="logo-text">
              <h1>KUSCCO</h1>
              <p>Kenya Union of Savings & Credit Cooperatives</p>
            </div>
          </div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={isOpen ? 'active' : ''}>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  onClick={closeMenu} 
                  className={isActiveLink('/') ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => !isOpen && handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className={`dropdown-toggle ${activeDropdown === 'about' ? 'active' : ''}`}
                  onClick={(e) => handleDropdownClick('about', e)}
                  aria-expanded={activeDropdown === 'about'}
                  aria-haspopup="true"
                >
                  About Us <FaChevronDown className="dropdown-chevron" />
                </button>
                <div 
                  className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}
                  onMouseEnter={() => handleDropdownEnter('about')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="dropdown-content">
                    <h4 className="dropdown-title">About KUSCCO</h4>
                    <div className="dropdown-grid">
                      {aboutSubmenu.map((item, index) => (
                        <Link 
                          key={index} 
                          to={item.path} 
                          onClick={closeMenu}
                          className={`dropdown-item ${hoveredItem === 'about' ? 'hover-effect' : ''}`}
                        >
                          <span className="dropdown-item-icon">{item.icon}</span>
                          <span className="dropdown-item-text">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => !isOpen && handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className={`dropdown-toggle ${activeDropdown === 'services' ? 'active' : ''}`}
                  onClick={(e) => handleDropdownClick('services', e)}
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  Services <FaChevronDown className="dropdown-chevron" />
                </button>
                <div 
                  className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="dropdown-content">
                    <h4 className="dropdown-title">Our Services</h4>
                    <div className="dropdown-grid">
                      {servicesSubmenu.map((item, index) => (
                        <Link 
                          key={index} 
                          to={item.path} 
                          onClick={closeMenu}
                          className={`dropdown-item ${hoveredItem === 'services' ? 'hover-effect' : ''}`}
                        >
                          <span className="dropdown-item-icon">{item.icon}</span>
                          <span className="dropdown-item-text">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/membership" 
                  onClick={closeMenu}
                  className={isActiveLink('/membership') ? 'active' : ''}
                >
                  Membership
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/news" 
                  onClick={closeMenu}
                  className={isActiveLink('/news') ? 'active' : ''}
                >
                  News & Events
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/resources" 
                  onClick={closeMenu}
                  className={isActiveLink('/resources') ? 'active' : ''}
                >
                  Resources
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className={isActiveLink('/contact') ? 'active' : ''}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="nav-cta">
              <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;