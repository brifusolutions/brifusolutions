import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText } from 'lucide-react';
import termsBanner from '../assets/images/about-banner.png'; // Reusing banner

const Terms = () => {
    return (
        <div className="page-content">
            <PageHeader
                title="Terms of Service"
                image={termsBanner}
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="terms-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <FileText size={48} color="#349fd0" />
                            <h2 style={{ margin: 0 }}>Terms & Conditions</h2>
                        </div>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Welcome to BRIFU SOLUTIONS. By accessing or using this website and our HR consulting / HR outsourcing services, you agree to be bound by these Terms of Service. Please read them carefully before using our site or engaging our services.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Our services are intended for business and professional use. You agree to provide accurate information, use our services only for lawful purposes, and not to misuse the website, interfere with its security, or attempt unauthorised access to any part of it.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            All content on this website, including text, logos, graphics and other materials, is owned or licensed by BRIFU SOLUTIONS and is for your personal or internal business use only. You may not copy, modify, distribute or reuse any content without our prior written permission.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            To the maximum extent permitted by law, our services and website are provided on an “as is” and “as available” basis, and we do not guarantee uninterrupted or error‑free operation. We are not liable for any indirect, incidental or consequential loss arising from your use of our website or services.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            These Terms may be updated from time to time, and continued use of the website after changes are posted means you accept the revised Terms. If you have any questions, please contact us at <a href="mailto:brifusolutions@gmail.com" style={{ color: '#349fd0', fontWeight: '500' }}>brifusolutions@gmail.com</a> or <span style={{ color: '#349fd0', fontWeight: '500' }}>7200002258 / 9659022248</span>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
