import React, { useState, useEffect, useRef } from 'react';
import '../styles/Partners.css';

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Array of partner logos
  const partnerLogos = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/partners/${i + 1}.gif`,
    alt: `Partner ${i + 1}`,
  }));

  const visibleCount = 5; // Number of logos visible at once
  const totalSlides = Math.ceil(partnerLogos.length);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Create a seamless loop of logos
  const getDisplayLogos = () => {
    const logos = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % partnerLogos.length;
      logos.push(partnerLogos[index]);
    }
    return logos;
  };

  const displayLogos = getDisplayLogos();

  return (
    <section className="partners-section home-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Trusted Partners</h2>
          <p>Collaborating with leading organizations to empower cooperatives across Kenya</p>
        </div>

        <div className="partners-container">
          <button 
            className="partners-nav prev" 
            onClick={prevSlide}
            aria-label="Previous partners"
          >
            ‹
          </button>

          <div 
            className="partners-slider"
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="partners-track">
              {displayLogos.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className={`partner-logo-wrapper ${isPaused ? 'paused' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="partner-logo">
                    <img 
                      src={partner.src} 
                      alt={partner.alt}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/180x90/0a3d62/ffffff?text=Partner+${partner.id}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="partners-nav next" 
            onClick={nextSlide}
            aria-label="Next partners"
          >
            ›
          </button>
        </div>

        <div className="partners-controls">
          <button 
            className={`play-pause-btn ${isPaused ? 'paused' : ''}`}
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? '▶' : '❚❚'}
          </button>

          <div className="slide-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;