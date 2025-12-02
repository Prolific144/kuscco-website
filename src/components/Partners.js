import React, { useState, useEffect, useRef } from 'react';
import '../styles/Partners.css';

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Array of partner logos - using the gif files from your folder
  const partnerLogos = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/partners/${i + 1}.gif`,
    alt: `Partner ${i + 1}`,
    name: `Partner Organization ${i + 1}`
  }));

  const partnersPerSlide = 5;
  const totalSlides = Math.ceil(partnerLogos.length / partnersPerSlide);

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
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Get current slide partners
  const getCurrentPartners = () => {
    const startIndex = currentIndex * partnersPerSlide;
    const endIndex = startIndex + partnersPerSlide;
    return partnerLogos.slice(startIndex, endIndex);
  };

  // If we have fewer partners than per slide, duplicate some
  const displayPartners = getCurrentPartners();
  if (displayPartners.length < partnersPerSlide) {
    const needed = partnersPerSlide - displayPartners.length;
    displayPartners.push(...partnerLogos.slice(0, needed));
  }

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
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {displayPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${currentIndex}`}
                className={`partner-card ${isPaused ? 'paused' : ''}`}
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
                      e.target.src = `https://via.placeholder.com/120x60/0a3d62/ffffff?text=Partner+${partner.id}`;
                    }}
                  />
                </div>
                <p className="partner-name">{partner.name}</p>
              </div>
            ))}
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