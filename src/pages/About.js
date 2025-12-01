import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Page.css';

const About = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    if (location.pathname.includes('history')) return 'Our History';
    if (location.pathname.includes('mission')) return 'Mission & Vision';
    if (location.pathname.includes('board')) return 'Board of Directors';
    if (location.pathname.includes('management')) return 'Management Team';
    return 'About Us';
  };

  const getPageDescription = () => {
    if (location.pathname.includes('history')) return 'Learn about our journey since 1973';
    if (location.pathname.includes('mission')) return 'Our mission, vision and core values';
    if (location.pathname.includes('board')) return 'Meet our board of directors';
    if (location.pathname.includes('management')) return 'Our experienced management team';
    return 'Learn more about KUSCCO';
  };

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>{getPageTitle()}</h1>
          <p>{getPageDescription()}</p>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <h2>{getPageTitle()}</h2>
          <p>Detailed content for {getPageTitle().toLowerCase()}...</p>
        </div>
      </div>
    </div>
  );
};

export default About;