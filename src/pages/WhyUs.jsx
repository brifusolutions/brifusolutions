import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Award, Smile } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import whyUsBanner from '../assets/images/why-us-banner.png';

const WhyUs = () => {
    return (
        <div className="page-content">
            <PageHeader
                title="Why Choose BRIFU SOLUTIONS?"
                image={whyUsBanner}
            />

            <section className="section bg-white">
                <div className="container">

                    <div className="text-center mb-2">
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>There are several reasons why clients choose Brifu Solutions for their HR Consulting & Statutory Compliance needs:</p>
                    </div>

                    <div className="grid-3">
                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <Briefcase size={64} strokeWidth={1.5} />
                            </div>
                            <h3>Experience</h3>
                            <p>With over 25 years of expertise in HR Management, Payroll Processing, and Labour Law Compliance, we possess the deep knowledge and practical insight required to streamline your workforce operations and ensure 100% statutory compliance.</p>
                        </div>

                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ color: '#fbbf24', marginBottom: '1rem' }}>
                                <Award size={64} strokeWidth={1.5} />
                            </div>
                            <h3>Reputation</h3>
                            <p>Brifu Solutions has built a strong reputation for excellence, trustworthiness, and client satisfaction. The company is known for its consistent commitment to delivering professional and dependable services.</p>
                        </div>

                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ color: '#10b981', marginBottom: '1rem' }}>
                                <Smile size={64} strokeWidth={1.5} />
                            </div>
                            <h3>Convenience</h3>
                            <p>Brifu Solutions provides a smooth, hassle-free service experience, making it easy for clients to access the financial guidance they need. The firm is recognized for its client-centric approach and long-standing service excellence.</p>
                        </div>
                    </div>

                    <div className="mt-4" style={{ maxWidth: '900px', margin: '3rem auto 2rem auto' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem', textAlign: 'justify' }}>
                            Our engagement model is based on client needs combined with best practices in the industry. In this regard we believe in a consultative approach where we work with our clients to define the most appropriate approach. We are able to adjust our offering to meet client demand and optimize the return on investment.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>
                            In all our services we display the highest levels of integrity, fairness and transparency. Clients can in all instances rest assured that our actions and approach is within the confines of the law. Our staff is our biggest asset and as such we treat them with dignity, respect and fairness.
                        </p>
                    </div>



                    <div className="mt-4 text-center">
                        <Link to="/contact" className="btn btn-primary">Work With Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
