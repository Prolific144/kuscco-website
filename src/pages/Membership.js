import React from 'react';
import { FaCheckCircle, FaFileAlt, FaHandshake, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import '../styles/Page.css';

const Membership = () => {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Risk Management',
      description: 'Access to comprehensive risk management services and insurance products'
    },
    {
      icon: <FaChartLine />,
      title: 'Financial Support',
      description: 'Financial intermediation through our Central Finance Fund'
    },
    {
      icon: <FaFileAlt />,
      title: 'Advocacy',
      description: 'Strong representation and advocacy at national and international levels'
    },
    {
      icon: <FaUsers />,
      title: 'Networking',
      description: 'Connect with over 4,000 SACCOs across Kenya'
    },
    {
      icon: <FaHandshake />,
      title: 'Training',
      description: 'Regular capacity building and training programs'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Compliance',
      description: 'Support with regulatory compliance and best practices'
    }
  ];

  const membershipSteps = [
    {
      number: '01',
      title: 'Eligibility Check',
      description: 'Confirm your SACCO meets the basic requirements for KUSCCO membership',
      details: [
        'Registered with Commissioner for Cooperatives',
        'Active operations for at least 6 months',
        'Minimum of 100 active members',
        'Clean compliance record'
      ]
    },
    {
      number: '02',
      title: 'Application Submission',
      description: 'Complete and submit the membership application package',
      details: [
        'Download application forms from our website',
        'Complete all required documentation',
        'Include certified copies of registration certificates',
        'Submit audited financial statements'
      ]
    },
    {
      number: '03',
      title: 'Documentation Review',
      description: 'Our team reviews your application and supporting documents',
      details: [
        'Verification of registration status',
        'Financial health assessment',
        'Compliance check with regulatory requirements',
        'Due diligence process'
      ]
    },
    {
      number: '04',
      title: 'Approval & Admission',
      description: 'Receive official admission into KUSCCO membership',
      details: [
        'Approval by KUSCCO Board of Directors',
        'Payment of membership fees',
        'Issuance of membership certificate',
        'Onboarding and orientation'
      ]
    }
  ];

  const membershipTypes = [
    {
      type: 'Ordinary Membership',
      description: 'For registered SACCOs seeking full benefits and voting rights',
      requirements: [
        'Fully registered SACCO',
        'Minimum 6 months of operation',
        'Payment of registration fee'
      ]
    },
    {
      type: 'Associate Membership',
      description: 'For emerging SACCOs and cooperative organizations',
      requirements: [
        'Registration in progress',
        'Minimum 50 members',
        'Development plan in place'
      ]
    },
    {
      type: 'Corporate Membership',
      description: 'For financial institutions supporting the cooperative movement',
      requirements: [
        'Registered financial institution',
        'Clear cooperative support agenda',
        'Board approval required'
      ]
    }
  ];

  const requiredDocuments = [
    'Certificate of Registration',
    'Constitution and By-Laws',
    'Latest audited financial statements',
    'List of current Board of Directors',
    'Membership register',
    'Organizational structure',
    'Business plan (for new SACCOs)',
    'Compliance certificates'
  ];

  return (
    <div className="page-container">
      <div className="page-hero membership-hero">
        <div className="container">
          <h1>Join KUSCCO Membership</h1>
          <p>Become part of Kenya's largest and most influential SACCO network</p>

        </div>
      </div>

      <div className="page-content">
        <div className="container">
          {/* Membership Benefits Section */}
          <section className="membership-section">
            <h2 className="section-title">Why Join KUSCCO?</h2>
            <p className="section-subtitle">
              As Kenya's apex SACCO organization, we provide unparalleled benefits and support to our members
            </p>
            
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Membership Types */}
          <section className="membership-section types-section">
            <h2 className="section-title">Membership Categories</h2>
            <div className="types-grid">
              {membershipTypes.map((type, index) => (
                <div key={index} className="type-card">
                  <h3>{type.type}</h3>
                  <p className="type-description">{type.description}</p>
                  <div className="requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {type.requirements.map((req, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className="check-icon" /> {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step by Step Process */}
          <section className="membership-section process-section">
            <h2 className="section-title">How to Become a Member</h2>
            <p className="section-subtitle">Follow these simple steps to join the KUSCCO network</p>
            
            <div className="process-steps">
              {membershipSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-header">
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                  </div>
                  <p className="step-description">{step.description}</p>
                  <div className="step-details">
                    <h4>What's Required:</h4>
                    <ul>
                      {step.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Required Documents */}
          <section className="membership-section documents-section">
            <h2 className="section-title">Required Documents</h2>
            <div className="documents-list">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="document-item">
                  <FaFileAlt className="doc-icon" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="membership-section cta-section">
            <div className="cta-card">
              <div className="cta-content">
                <h2>Ready to Join?</h2>
                <p>
                  Start your membership application today and begin accessing the full range of 
                  KUSCCO benefits and services designed to grow your SACCO.
                </p>
                <div className="cta-buttons">
                  <a href="/membership-application" className="btn btn-primary btn-large">
                    Start Application
                  </a>
                  <a href="/download-forms" className="btn btn-secondary">
                    Download Forms
                  </a>
                </div>
              </div>
              <div className="cta-support">
                <h3>Need Help?</h3>
                <p>Contact our membership team for assistance:</p>
                <div className="contact-info">
                  <p>📧 membership@kuscco.com</p>
                  <p>📞 +254 20 2715685</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="membership-section faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What are the membership fees?</h3>
                <p>
                  Membership fees vary based on the category. Ordinary members pay a one-time 
                  registration fee and annual subscription based on asset size.
                </p>
              </div>
              <div className="faq-item">
                <h3>How long does the process take?</h3>
                <p>
                  The entire process typically takes 4-6 weeks from application submission 
                  to final approval, depending on document completeness.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can individual members join?</h3>
                <p>
                  KUSCCO membership is for SACCOs and cooperative organizations only. 
                  Individual members should join through their respective SACCOs.
                </p>
              </div>
              <div className="faq-item">
                <h3>What support is available after joining?</h3>
                <p>
                  New members receive orientation, ongoing training, regular updates, 
                  and access to all KUSCCO services and products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Membership;