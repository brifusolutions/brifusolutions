import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import PageHeader from '../components/PageHeader';
import contactBanner from '../assets/images/contact-banner.png';

const Contact = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Using EmailJS for contact submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        // Replace these with your actual Service ID, Template ID, and Public Key
        // Sign up at https://www.emailjs.com/ to get them.
        const SERVICE_ID = 'service_dr61mj5';
        const TEMPLATE_ID = 'template_bju3g3c';
        const PUBLIC_KEY = '_8wcpON_iv4is5M0z';

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    btn.innerText = originalText;
                    btn.disabled = false;
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert('Failed to send message. Please try again or contact us directly.');
                    btn.innerText = originalText;
                    btn.disabled = false;
                },
            );
    };


    const closePopup = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="page-content">
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you."
                image={contactBanner}
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="contact-grid">

                        {/* Left: Contact Form */}
                        <div className="contact-form-container">
                            <h2>Get in Touch</h2>
                            <p>Fill out the form below and we will get back to you shortly.</p>

                            <form ref={form} onSubmit={handleSubmit} className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                                <textarea
                                    name="message"
                                    placeholder="How can we help you?"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-textarea"
                                ></textarea>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>

                        {/* Right: Info & Map in Sidebar */}
                        <div className="contact-sidebar">

                            {/* Info Card */}
                            <div className="contact-info-card">
                                <div className="info-item">
                                    <div className="info-icon"><MapPin size={20} /></div>
                                    <div className="info-content">
                                        <h4>Visit Us</h4>
                                        <p>38/11, J.N. Road,<br />Opp. to Dr. Agarwal Eye Hospital,<br />Tiruvallur - 602 001.</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Phone size={20} /></div>
                                    <div className="info-content">
                                        <h4>Call Us</h4>
                                        <p>7200002258 / 9659022248</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Mail size={20} /></div>
                                    <div className="info-content">
                                        <h4>Email Us</h4>
                                        <p>brifusolutions@gmail.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Clock size={20} /></div>
                                    <div className="info-content">
                                        <h4>Working Hours</h4>
                                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Card */}
                            <div className="map-card">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?q=38%2F11%2C+JN+Road%2C+Opp.+to+Dr.+Agarwal+Eye+Hospital%2C+Hariram+Nagar%2C+Poonga+Nagar%2C+Tiruvallur%2C+Kakkalur%2C+Tamil+Nadu+602001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    title="Google Maps"
                                ></iframe>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Success Popup */}
            {isSubmitted && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-icon">✓</div>
                        <h3>Message Sent Successfully</h3>
                        <p>Thank you for reaching out! We will get back to you shortly.</p>
                        <button className="btn btn-primary" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
