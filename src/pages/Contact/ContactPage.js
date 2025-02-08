import React, { useState } from 'react';
import './ContactPage.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Clear input fields
            setTimeout(() => setSubmitted(false), 3000); // Hide validation message after 3 seconds
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="contact-hero">
                <h1 className="contact-title">Contact Us</h1>
                <div className="hero-image-container">
                    <img src={`${process.env.PUBLIC_URL}/contact-us.avif`} alt="Contact Team" className="hero-image" />
                </div>
            </div>

            {/* Contact Content Section */}
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-form">
                        <h2>Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>

                            <button type="submit">Submit</button>
                            {submitted && <p className="validation-message">Thank you! Your message has been sent.</p>}
                        </form>
                    </div>

                    <div className="contact-details">
                        <h2>Get in Touch</h2>
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <p><strong>Phone:</strong> (123) 456-7890</p>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <p><strong>Email:</strong> contact@radiantgrowth.com</p>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <p><strong>Address:</strong> 123 Therapy Lane, Melbourne, Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
