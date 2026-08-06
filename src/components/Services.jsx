import React from 'react';
import '../Services.css';
import services from '../data/servicesData';

const Services = ({ onServiceSelect }) => {

  return (
    <section id="services" className="services section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive laptop repair solutions for every problem</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="service-media">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="service-image" />
                ) : (
                  <div className="service-icon">{service.icon}</div>
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline" onClick={() => onServiceSelect(service)}>
                Request Repair
              </button>
            </div>
          ))}
        </div>

        {/* Removed guarantee/badges per update request */}
      </div>
    </section>
  );
};

export default Services;