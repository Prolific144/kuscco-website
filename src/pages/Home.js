import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import News from '../components/News';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import '../styles/Home.css';

const Home = () => {
  const [heroImages] = useState([
    {
      url: '/images/hero1.jpg',
      alt: 'KUSCCO Cooperative Meeting',
      title: 'Karibu KUSCCO',
      subtitle: 'Empowering Cooperatives for Sustainable Growth',
      description: 'Your trusted partner in cooperative development and financial empowerment',
      cta: 'Join Us Today',
      color: 'var(--primary)'
    },
    {
      url: '/images/hero2.jpg',
      alt: 'Financial Services',
      title: 'Comprehensive Financial Solutions',
      subtitle: 'Banking, Insurance & Investment Services',
      description: 'Providing tailored financial solutions for cooperatives and their members',
      cta: 'Explore Services',
      color: 'var(--secondary)'
    },
    {
      url: '/images/hero3.jpg',
      alt: 'Capacity Building',
      title: 'Building Capacity',
      subtitle: 'Training & Development Programs',
      description: 'Enhancing cooperative governance, management and operational efficiency',
      cta: 'Learn More',
      color: 'var(--accent)'
    },
    {
      url: '/images/hero4.jpg',
      alt: 'Cooperative Success',
      title: 'Transforming Lives',
      subtitle: 'Through Cooperative Movement',
      description: 'Creating sustainable livelihoods for millions across Kenya',
      cta: 'View Success Stories',
      color: '#2c3e50'
    }
  ]);

  return (
    <div className="home">
      <Hero images={heroImages} />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <News />
      <Partners />
    </div>
  );
};

export default Home;