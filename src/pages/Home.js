import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import News from '../components/News';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <About />
      <News />
      <Partners />
    </div>
  );
};

export default Home;