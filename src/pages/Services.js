import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Page.css';

const Services = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    if (location.pathname.includes('consultancy')) return 'Consultancy Services';
    if (location.pathname.includes('capacity-building')) return 'Capacity Building';
    if (location.pathname.includes('advocacy')) return 'Advocacy';
    if (location.pathname.includes('research')) return 'Research & Development';
    return 'Our Services';
  };

  const getPageDescription = () => {
    if (location.pathname.includes('consultancy')) return 'Expert advisory and consultancy services';
    if (location.pathname.includes('capacity-building')) return 'Training and capacity development';
    if (location.pathname.includes('advocacy')) return 'Representing SACCO interests';
    if (location.pathname.includes('research')) return 'Research and product development';
    return 'Explore our range of services';
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

export default Services;