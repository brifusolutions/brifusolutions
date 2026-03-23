import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <div className="footer-logo">
                        <img src={logo} alt="BRIFU SOLUTIONS Logo" className="footer-logo-image" />
                    </div>
                    <p className="footer-desc">
                        One Stop Solutions for HR , Accounts & Taxation
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="footer-contact-item">
                        <MapPin size={18} />
                        <p>38/11, J.N. Road,<br />Opp. to Dr. Agarwal Eye Hospital,<br />Tiruvallur - 602 001.</p>
                    </div>
                    <div className="footer-contact-item">
                        <Phone size={18} />
                        <p>7200002258 / 9659022248</p>
                    </div>
                    <div className="footer-contact-item">
                        <Mail size={18} />
                        <p>brifusolutions@gmail.com</p>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} BRIFU SOLUTIONS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
