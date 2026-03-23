import React from 'react';
import PageHeader from '../components/PageHeader';
import { Shield } from 'lucide-react';

// Using a generic banner or reusing one since no specific privacy banner was mentioned
// Reusing about-banner as a placeholder or just a solid color if needed, but PageHeader expects an image.
// I'll reuse about-banner for now or just pass null if PageHeader handles it, but looking at previous usages, it takes an image.
// Let's us about-banner as a fallback safe option.
import privacyBanner from '../assets/images/about-banner.png';

const Privacy = () => {
    return (
        <div className="page-content">
            <PageHeader
                title="Privacy Policy"
                image={privacyBanner}
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="privacy-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <Shield size={48} color="#349fd0" />
                            <h2 style={{ margin: 0 }}>Data Protection & Privacy</h2>
                        </div>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            BRIFU SOLUTIONS provides HR consulting and HR outsourcing services to clients and candidates and respects your privacy. This notice explains what personal data we collect, why we collect it, and how we protect it in line with Indian data protection laws, including the Digital Personal Data Protection Act, 2023.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            We collect basic contact details, CV and employment information, and HR/payroll data needed to deliver our services, comply with legal obligations and improve our website. Data may come from you directly, your current or potential employer, or verified third‑party service providers such as background check partners.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            We use this data to process job applications, manage employee life‑cycle and payroll for our HR outsourcing clients, respond to enquiries, and meet regulatory requirements. We do not sell your personal data and share it only with clients, service providers and authorities where necessary and with appropriate safeguards.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Reasonable technical and organisational measures are in place to protect your information from unauthorised access, misuse or loss. Data is retained only for as long as needed for the purposes stated above or as required by applicable law.
                        </p>

                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Under applicable law, you may have rights to access, correct, update or request deletion of your personal data, and to withdraw consent where processing is based on consent. To exercise these rights or raise any questions, please contact us at <a href="mailto:brifusolutions@gmail.com" style={{ color: '#349fd0', fontWeight: '500' }}>brifusolutions@gmail.com</a> or <span style={{ color: '#349fd0', fontWeight: '500' }}>7200002258 / 9659022248</span>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
