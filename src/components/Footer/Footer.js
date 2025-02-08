import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1: Business Info */}
                <div className="footer-column">
                    <h2>Radiant Growth Therapy</h2>
                    <p>Empowering lives through the healing power of music.</p>
                    <div className="contact-info">
                        <p><FaPhone /> +61 XXXX XXX XXX</p>
                        <p><FaEnvelope /> contact@rgt.com.au</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Form */}
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <form>
                        <input type="email" placeholder="Email Address" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>

            {/* Copyright Text */}
            <div className="footer-bottom">
                <p>Copyright &copy; 2025 radiantgrowththerapy.com.au - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
