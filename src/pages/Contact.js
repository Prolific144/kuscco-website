import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';
import '../styles/ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const regionalOffices = [
    {
      region: "Coast Region Office - Mombasa",
      address: "Trade Center 2nd Floor, P.O Box 85113-80100, Mombasa",
      email: "admin.coast@kuscco.com",
      icon: <FaMapMarkerAlt />
    },
    {
      region: "Mt. Kenya Region Office - Embu",
      address: "Pearl Centre, 2nd Floor, Suite B4, Daya Patel Road, P.O Box 1143-60100, Embu",
      email: "admin.mtkenya@kuscco.com",
      icon: <FaBuilding />
    },
    {
      region: "Rift Valley Region Office - Nakuru",
      address: "AFC House, 2nd Floor, West Wing, P.O Box 2077-20100, Nakuru",
      email: "admin.riftvalley@kuscco.com",
      icon: <FaBuilding />
    },
    {
      region: "Western Region Office - Kakamega",
      address: "IG Plaza, 3rd Floor, Muruli Road, Behind Posta Kenya, P.O Box 1624-50100, Kakamega",
      email: "admin.kakamega@kuscco.com",
      icon: <FaBuilding />
    },
    {
      region: "Nairobi Region Office",
      address: "KUSCCO Centre, Kilimanjaro Avenue, Upperhill, P.O Box 28403-00200 Nairobi",
      email: "admin.nairobi@kuscco.com",
      icon: <FaBuilding />
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h2>Head Office Information</h2>
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
          
          <div className="regional-offices-section">
            <h2 className="section-title">Regional Offices</h2>
            <div className="regional-grid">
              {regionalOffices.map((office, index) => (
                <div key={index} className="regional-office-card">
                  <div className="office-icon">{office.icon}</div>
                  <h3>{office.region}</h3>
                  <div className="office-details">
                    <p className="office-address">{office.address}</p>
                    <p className="office-email">
                      <FaEnvelope className="email-icon" /> {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;