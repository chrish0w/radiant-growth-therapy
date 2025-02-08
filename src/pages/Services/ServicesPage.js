import React, { useState } from 'react';
import './ServicesPage.css';
import MapComponent from '../../components/Map/MapComponent';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import Address Icon


function ServicesPage() {
    const services = [
        { title: "Individual Music Therapy Sessions", description: "Personalized 1-on-1 therapy tailored to specific needs, enhancing emotional, social, and cognitive development." },
        { title: "Group Music Therapy", description: "Collaborative sessions that encourage social interaction and emotional expression through music." },
        { title: "Early Childhood Development Programs", description: "Music-based interventions to support speech, motor skills, and cognitive growth in young children." },
        { title: "Music Therapy for Mental Health", description: "Therapeutic music sessions designed to support individuals dealing with anxiety, depression, and emotional regulation." },
        { title: "Disability Support through Music", description: "Specialized therapy for individuals with disabilities, enhancing communication, social engagement, and motor skills." },
        { title: "Music-Based Social Skills Programs", description: "Sessions focused on improving communication, teamwork, and social engagement through structured music activities." },
        { title: "Workshops for Schools & Organizations", description: "Educational workshops designed for schools, workplaces, and organizations to explore the benefits of music therapy." },
        { title: "Telehealth Music Therapy Sessions", description: "Online therapy sessions for clients who prefer remote support, ensuring accessibility and convenience." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div>
          {/* Hero Section */}
          <div className="services-hero">
              <h1 className="services-title">Our Services</h1>
              <div className="hero-image-container">
                  <img src="/service-image.jpeg" alt="Music Therapy Session" className="hero-image" />
              </div>
          </div>

          {/* Services Content Section */}
          <div className="services-container">
              <div className="services-list">
                  {services.map((service, index) => (
                      <div key={index} className="service-item">
                          <button className="service-button" onClick={() => toggleDescription(index)}>
                              {service.title}
                          </button>
                          {openIndex === index && <p className="service-description">{service.description}</p>}
                      </div>
                  ))}
              </div>

              {/* Location Section */}
              <div className="location-section">
                    <h2 className="location-title">📍 Our Location</h2>
                    <div className="address-container">
                        <FaMapMarkerAlt className="address-icon" />
                        <p className="address-text">21 Michelle Lane, Silverwater, Sydney NSW</p>
                    </div>
                    <MapComponent />
                </div>
          </div>
      </div>
  );
}

export default ServicesPage;
