import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Empowering SACCOs for Sustainable Growth</h1>
        <p>KUSCCO is the umbrella body for Savings and Credit Cooperatives in Kenya, providing innovative financial solutions, capacity building, and advocacy services.</p>
        <div className="hero-btns">
          <Link to="/membership" className="btn btn-primary">Become a Member</Link>
          <Link to="/services" className="btn btn-secondary">Our Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;