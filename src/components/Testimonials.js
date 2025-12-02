import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Mwangi',
      role: 'Chairman, Thika Sacco',
      content: 'KUSCCO has been instrumental in transforming our Sacco through capacity building and innovative financial solutions. Their support has helped us grow our membership by 40% in two years.',
      rating: 5,
      image: '/images/testimonials/1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Wanjiku',
      role: 'CEO, Meru Farmers Cooperative',
      content: 'The insurance services provided by KUSCCO have given our members peace of mind. Their prompt claim settlement and excellent customer service are unmatched in the industry.',
      rating: 5,
      image: '/images/testimonials/2.jpg'
    },
    {
      id: 3,
      name: 'David Omondi',
      role: 'Treasurer, Nairobi Teachers Sacco',
      content: 'As a long-term member, I can confidently say KUSCCO is the backbone of the cooperative movement in Kenya. Their advocacy and representation have brought positive policy changes.',
      rating: 5,
      image: '/images/testimonials/3.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="testimonials-section home-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Members Say</h2>
          <p>Hear from cooperative leaders and members who have experienced our services</p>
        </div>

        <div className="testimonial-slider">
          <button className="testimonial-nav prev" onClick={prevTestimonial}>‹</button>
          
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon left" />
            
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.content}</p>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/60/0a3d62/ffffff?text=User';
                  }}
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
            
            <FaQuoteRight className="quote-icon right" />
          </div>
          
          <button className="testimonial-nav next" onClick={nextTestimonial}>›</button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;