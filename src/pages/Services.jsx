import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import servicesBanner from '../assets/images/services-banner.png';

import {
    ClipboardCheck,
    Calculator,
    Building2,
    ShieldCheck,
    Users,
    FileText
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "COMPANY FORMATION & REGISTRATION",
            desc: "End-to-end assistance for Private Limited, LLP, and Partnership registration.",
            id: "company-formation"
        },
        {
            title: "PAYROLL PROCESSING",
            desc: "Accurate monthly payroll calculation, payslip generation, and compliance.",
            id: "payroll-processing"
        },
        {
            title: "STATUTORY COMPLIANCES MANAGEMENT",
            desc: "PF, ESI, and other labor law compliance management services.",
            id: "statutory-compliance"
        },
        {
            title: "RECRUITMENT",
            desc: "Sourcing and screening top talent to meet your organizational needs.",
            id: "recruitment"
        },
        {
            title: "ACCOUNTS & IT FILING",
            desc: "Professional bookkeeping, GST, and Income Tax Return filing services.",
            id: "accounts-it-filing"
        }
    ];

    const getIcon = (id) => {
        switch (id) {
            case 'company-formation': return <Building2 size={32} strokeWidth={1.5} />;
            case 'payroll-processing': return <Calculator size={32} strokeWidth={1.5} />;
            case 'statutory-compliance': return <ShieldCheck size={32} strokeWidth={1.5} />;
            case 'recruitment': return <Users size={32} strokeWidth={1.5} />;
            case 'accounts-it-filing': return <FileText size={32} strokeWidth={1.5} />;
            default: return <ClipboardCheck size={32} strokeWidth={1.5} />;
        }
    };

    return (
        <div className="page-content services-page">
            <PageHeader
                title="Our Services"
                subtitle="Expert solutions for every financial need."
                image={servicesBanner}
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="services-grid">
                        {services.map((s, index) => (
                            <div className="service-card" key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="service-icon-wrapper">
                                    {getIcon(s.id)}
                                </div>
                                <h3 className="service-title" style={{ minHeight: '3rem' }}>{s.title}</h3>
                                <p className="service-desc" style={{ flex: 1 }}>{s.desc}</p>
                                <div className="mt-2 text-center">
                                    <Link to={`/services/${s.id}`} className="btn btn-primary btn-sm">View More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
