import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const stats = [
    { number: '4,000+', label: 'Member SACCOs' },
    { number: '47', label: 'Years of Service' },
    { number: '5M+', label: 'Members Served' }
  ];

  return (
    <section className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About KUSCCO</h2>
            <p>The Kenya Union of Savings and Credit Cooperatives (KUSCCO) was established in 1973 as the national umbrella organization for Savings and Credit Cooperative Societies (SACCOs) in Kenya.</p>
            <p>Our mission is to promote and develop a dynamic, sustainable, and competitive cooperative movement through provision of quality and innovative financial and technical services.</p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn btn-primary">Read More About Us</Link>
          </div>
          
          <div className="about-img">
            <img 
              src="https://images.unsplash.com/photo-1551830893-b91e0a810b32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="KUSCCO Team"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/600x400/0a3d62/ffffff?text=KUSCCO+Team';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;