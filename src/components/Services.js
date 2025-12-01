import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Insurance Services',
      description: 'Comprehensive insurance solutions tailored for SACCOs and their members, including life, property, and liability coverage.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/services/insurance'
    },
    {
      title: 'Financial Services',
      description: 'Specialized financial products including liquidity support, investment opportunities, and credit facilities for SACCOs.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/services/financial'
    },
    {
      title: 'Consultancy Services',
      description: 'Expert advisory services in governance, risk management, strategic planning, and regulatory compliance for SACCOs.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/services/consultancy'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of services designed to strengthen SACCOs and enhance their capacity to serve members effectively.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img">
                <img 
                  src={service.image} 
                  alt={service.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400/0a3d62/ffffff?text=' + encodeURIComponent(service.title);
                  }}
                />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;