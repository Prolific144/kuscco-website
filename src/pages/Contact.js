import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with KUSCCO</p>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-text">
                    <h3>Address</h3>
                    <p>KUSCCO Centre, Upper Hill</p>
                    <p>P.O. Box 28403-00200</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <p>+254 20 2715685</p>
                    <p>+254 722 204 669</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>info@kuscco.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;