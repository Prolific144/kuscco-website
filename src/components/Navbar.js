import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown, e) => {
    if (e) {
      e.preventDefault();
    }
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const aboutSubmenu = [
    { title: 'Our History', path: '/about/history' },
    { title: 'Mission & Vision', path: '/about/mission' },
    { title: 'Board of Directors', path: '/about/board' },
    { title: 'Management Team', path: '/about/management' },
  ];

  const servicesSubmenu = [
    { title: 'Insurance Services', path: '/services/insurance' },
    { title: 'Financial Services', path: '/services/financial' },
    { title: 'Consultancy', path: '/services/consultancy' },
    { title: 'Capacity Building', path: '/services/capacity-building' },
  ];

  return (
    <>
      <div className="main-header">
        <div className="container header-content">
          <div className="logo">
            <Link to="/">
              <img 
                src="https://kuscco.com/images/kuscco-logo.png" 
                alt="KUSCCO Logo" 
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
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={isOpen ? 'active' : ''}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              
              <li className="dropdown">
                <button 
                  className="dropdown-toggle" 
                  onClick={(e) => toggleDropdown('about', e)}
                  aria-expanded={activeDropdown === 'about'}
                  aria-haspopup="true"
                >
                  About Us <FaChevronDown />
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
                  {aboutSubmenu.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} onClick={closeMenu}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="dropdown">
                <button 
                  className="dropdown-toggle" 
                  onClick={(e) => toggleDropdown('services', e)}
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  Services <FaChevronDown />
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                  {servicesSubmenu.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} onClick={closeMenu}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              
              <li><Link to="/membership" onClick={closeMenu}>Membership</Link></li>
              <li><Link to="/news" onClick={closeMenu}>News & Events</Link></li>
              <li><Link to="/resources" onClick={closeMenu}>Resources</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;