import React from 'react';
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
            <p>KUSCCO stands as the apex organization for Savings and Credit Cooperatives in Kenya, championing the formation and growth of robust SACCOs. Our primary mandate is to advocate for and represent SACCOs.</p>
            <p>We focus on empowering middle and low-income earners in both rural and urban areas, a demographic that forms the backbone of Kenya's economy through the Small and Medium Enterprises (SME) sector.</p>
            <p>Our philosophy revolves around collaboration and member empowerment. To this end, we have developed a suite of tailored products and services designed to benefit all SACCOs and their members across Kenya, fostering a stronger, more resilient cooperative ecosystem.</p>
            
            {/* Vision and Mission Section */}
            <div className="vision-mission-section">
              <h3>Vision & Mission</h3>
              <div className="vision-mission-grid">
                <div className="vision-box">
                  <h4>Our Vision</h4>
                  <p>Sustainable environment for SACCOs growth in Kenya</p>
                </div>
                <div className="mission-box">
                  <h4>Our Mission</h4>
                  <p>To promote Co-operatives through advocacy and provision of market-driven products and services</p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Simple Link to full about page */}
            <a href="/about-details" className="btn btn-primary">Read More About Us</a>
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