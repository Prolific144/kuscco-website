import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 300);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  const goToSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const currentImage = images[currentSlide];

  return (
    <section className="hero">
      {/* Background Image */}
      <div className={`hero-background ${fade ? 'fade-out' : 'fade-in'}`}>
        <img 
          src={currentImage.url} 
          alt={currentImage.alt}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
          }}
        />
        <div className="hero-overlay" style={{ backgroundColor: currentImage.color }}></div>
      </div>

      {/* Hero Content */}
      <div className="container">
        <div className={`hero-content ${fade ? 'fade-out' : 'fade-in'}`}>
          <h1 className="hero-title">{currentImage.title}</h1>
          <h2 className="hero-subtitle">{currentImage.subtitle}</h2>
          <p className="hero-description">{currentImage.description}</p>
          
          <div className="hero-buttons">
            <Link to="/membership" className="btn btn-primary">
              {currentImage.cta}
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="slide-controls">
        <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        
        <button className="play-pause" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <button className="slide-nav next" onClick={nextSlide} aria-label="Next slide">
          <FaChevronRight />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;