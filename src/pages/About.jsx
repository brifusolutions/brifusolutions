import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import aboutBanner from '../assets/images/about-banner.png';
import './About.css';

const About = () => {
    return (
        <div className="page-content">
            <PageHeader
                title="About BRIFU SOLUTIONS"
                subtitle="Your trusted partner for Payroll, Recruitment, and Statutory Compliance Management."
                image={aboutBanner}
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="mb-2">
                        <h2 style={{ color: '#349fd0' }}>Who We Are</h2>
                        <p className="mt-1">
                            S. Suresh, Business Head of BRIFU SOLUTIONS has extensive experience of more than twenty
                            five years in both Indian Companies as well as MNCs. With his expertise in HR field of more than
                            12 years he brings in knowledge and value added services. BRIFU was started as niche service
                            provider, with a special purpose, after managing for more than 12 years handling more than
                            180 clients in Tamil Nadu & Andhra Pradesh and handled 40,000 Flexi labourers & Staffing. He is
                            ably supported in his activities by a vibrant team of dedicated professionals.
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="vma-item">
                            <div className="vma-header">
                                <div className="vma-icon"><Eye size={32} /></div>
                                <h3 className="vma-title">Vision</h3>
                            </div>
                            <div className="vma-content">
                                <p>BRIFU would like to be regarded as the best broad – based professional service organization that delivers value to its clients.</p>
                            </div>
                        </div>

                        <div className="vma-item">
                            <div className="vma-header">
                                <div className="vma-icon"><Target size={32} /></div>
                                <h3 className="vma-title">Mission</h3>
                            </div>
                            <div className="vma-content">
                                <p className="mb-1">BRIFU is committed in providing long term value-added professional services to Clients and improve their effectiveness.</p>
                                <ul className="vma-list">
                                    <li>Strives to identify the client’s needs and offer solutions based on requirement.</li>
                                    <li>Offers value based services to the client with clear deliverables.</li>
                                    <li>Establish a niche service and be different in understanding and handling customer requirements.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="vma-item">
                            <div className="vma-header">
                                <div className="vma-icon"><Gem size={32} /></div>
                                <h3 className="vma-title">Approach</h3>
                            </div>
                            <div className="vma-content">
                                <p className="mb-1">BRIFU understands the business model and needs of the client in providing customized solutions to meet business needs.</p>
                                <ul className="vma-list">
                                    <li>Adherence to time lines and transparency of transactions with focus on integrity & corporate ethics.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
