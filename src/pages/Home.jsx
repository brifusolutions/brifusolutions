import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Calculator, Briefcase, TrendingUp, ClipboardCheck } from 'lucide-react';
import './Home.css';
import homeBanner from '../assets/images/home-banner.png';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `url(${homeBanner})` }}>
                <div className="hero-overlay">
                    <div className="container hero-container">
                        <div className="hero-content">
                            <h1>One Stop Solutions for HR , Accounts & Taxation</h1>
                            <p>
                                Specializing in end-to-end Payroll, Statutory Compliance, Recruitment, Manpower Outsourcing, Accounts & Taxation for Manufacturing and Service sectors.
                            </p>
                            <div className="hero-btns">
                                <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
                                <Link to="/services" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Explore Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="trust-bar">
                <div className="container">
                    <div className="trust-item">
                        <Star className="trust-icon" size={32} />
                        <span className="trust-number">5.0</span>
                        <span className="trust-label">Google Rating</span>
                    </div>
                    <div className="trust-item">
                        <Users className="trust-icon" size={32} />
                        <span className="trust-number">100%</span>
                        <span className="trust-label">Client Focus</span>
                    </div>

                </div>
            </section>

            {/* Services Preview */}
            <section className="section bg-white services-preview">
                <div className="container">
                    <div className="section-header text-center mb-2">
                        <h2>Our Core Services</h2>
                        <p>BRIFU offers specialized services to support valuable clients so that they can concentrate on their
                            core activities leaving the management of these activities to us.</p>
                    </div>
                    <div className="grid-3">
                        <div className="card service-preview-card">
                            <div className="icon-wrapper">
                                <ClipboardCheck size={32} />
                            </div>
                            <h3>HR Consulting</h3>
                            <p>Specialized in Payroll Process, Statutory Compliance Management under various Acts.</p>
                        </div>
                        <div className="card service-preview-card">
                            <div className="icon-wrapper">
                                <Users size={32} />
                            </div>
                            <h3>HR Outsourcing</h3>
                            <p>Recruitment and Manpower Outsourcing catering to all segments in Manufacturing and Service sectors.</p>
                        </div>
                        <div className="card service-preview-card">
                            <div className="icon-wrapper">
                                <Calculator size={32} />
                            </div>
                            <h3>Accounts & Taxation</h3>
                            <p>Comprehensive Accounts & Taxation Services for individuals and businesses.</p>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
