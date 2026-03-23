import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import reviewsBanner from '../assets/images/reviews-banner.png';

const Reviews = () => {
    return (
        <div className="page-content">
            <PageHeader
                title="Client Reviews"
                image={reviewsBanner}
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="review-card" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '3rem',
                        borderRadius: '16px',
                        background: '#f8fafc',
                        border: '1px solid #349fd0',
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <div style={{ color: 'var(--accent-color)', opacity: 0.2, position: 'absolute', top: '2rem', left: '2rem' }}>
                            <Quote size={48} />
                        </div>

                        <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#fbbf24', marginBottom: '1.5rem' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>

                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', color: '#334155' }}>
                            "Exceptional service! They really helped me sort out my business tax filings and gave great advice for future planning. Highly professional team."
                        </p>

                        <div className="reviewer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '48px', height: '48px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                <User size={24} />
                            </div>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem' }}>Happy Client</strong>
                                <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
                                    Verified Google Review
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Reviews;
