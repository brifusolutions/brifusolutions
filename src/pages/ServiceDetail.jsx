import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import servicesBanner from '../assets/images/services-banner.png';
import { ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();

    // specific content for each service
    const serviceData = {
        'company-formation': {
            title: 'Company Formation & Registration',
            content: (
                <div>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        We provide end-to-end assistance for company formation and registration, ensuring a smooth start for your business.
                    </p>
                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Our Services Include:</h3>
                    <ul className="service-check-list">
                        <li>Private Limited Company Registration</li>
                        <li>Public Limited Company Registration</li>
                        <li>LLP Registration</li>
                        <li>One Person Company (OPC) Registration</li>
                        <li>Partnership Firm Registration</li>
                    </ul>
                </div>
            )
        },
        'payroll-processing': {
            title: 'Payroll Processing',
            content: (
                <div>
                    <p>
                        BRIFU provides an adaptable feature rich payroll management solution that simplifies the
                        ever-changing complexity of payroll to meet the demands of your workforce and business. We help
                        you address your payroll requirements from timekeeping to taxes, leveraging our powerful payroll
                        software for productivity and cost savings, ensuring that you meet all regulatory compliances.
                    </p>

                    {/* Flowchart Section */}
                    <div className="flowchart-container">
                        <div className="flow-col">
                            <div className="flow-box-header">PAYROLL PROCESS</div>
                            <ArrowDown size={32} className="flow-arrow-icon" style={{ margin: '0.5rem 0' }} />
                            <div className="flow-box">
                                <h4>Inputs</h4>
                                <ul className="flow-list">
                                    <li>New Employee Master</li>
                                    <li>Tax Investments</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flow-arrow-right-wrapper">
                            <ArrowRight size={40} className="flow-arrow-icon" />
                        </div>

                        <div className="flow-col">
                            <div className="flow-box">
                                <h4>Processing</h4>
                                <ul className="flow-list">
                                    <li>Attendance</li>
                                    <li>Leave Management</li>
                                    <li>Salary Master</li>
                                    <li>Deductions</li>
                                    <li>Loans & Advances</li>
                                    <li>Other incentives</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flow-arrow-right-wrapper">
                            <ArrowRight size={40} className="flow-arrow-icon" />
                        </div>

                        <div className="flow-col">
                            <div className="flow-box">
                                <h4>Outputs & Reports</h4>
                                <ul className="flow-list">
                                    <li>Salary slip</li>
                                    <li>Salary Register</li>
                                    <li>Bank transfer details</li>
                                    <li>Financial integration</li>
                                    <li>Statutory Reports</li>
                                    <li>Management Analysis</li>
                                    <li>Full & Final Settlement</li>
                                    <li>TDS Certificates</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>EMPLOYEE SATISFACTION</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        BRIFU’s payroll management services are meticulously crafted to address varying concerns of each
                        of your employees. While your employee-satisfaction lies at the heart of BRIFU’s every activity
                        associated with your business, we ensure that your employees have a hassle-free “HR & payrollexperience”,
                        taking all necessary steps to align your processes with any amendments in the law.
                    </p>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>RESOURCE OPTIMIZATION</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        BRIFU’s Payroll Processing solutions are cost-efficient, time-saving, and versatile. This also means
                        that your need for infrastructure and manpower is reduced to a great extent leading to a positive
                        effect on your business.
                    </p>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>DATA INTEGRITY</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        Data integrity, protection and confidentiality are BRIFU’s top priority. We follow industry best data
                        security and integrity measures in the facility. All data transfers and migrations are done through
                        complex data encryption and secure file upload and download systems. Our employees are bound by
                        stringent integrity and confidentiality clauses.
                    </p>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>COST ADVANTAGE</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        BRIFU seeks to add utmost value in all aspects of its commitment to and relationship with your
                        company and employees, including value for money. Your business and employees’ profitability is of
                        prime importance to us. While BRIFU’s services cost much lesser than standard market rates, our
                        quality-standard is never compromised.
                    </p>
                </div>
            )
        },
        'statutory-compliance': {
            title: 'Statutory Compliances Management',
            content: (
                <div>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Business in India is synonymous with the need to understand compliance and to stay out of legal
                        issues. Whether it is Statutory Compliance or Labour law compliance, progressive and bottom-line
                        focused managements understand that any form of compliance should be viewed as a dynamic item
                        of cost, rather than a passive charge on the profits. A superior operational finesse is needed to
                        achieve this goal.
                    </p>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        For any enterprise wanting to meet their bottom lines with minimally invasive resources, outsourcing
                        compliance may become the key to success. While the importance of compliance is obvious,
                        outsourcing to the right partner who will ensure systematic compliance, and back you with insights
                        into compliance can make all the difference in getting your workflow remaining competent as ever.
                    </p>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        With a holistic approach to risk management, labour law compliance, statutory compliance and their
                        adherence we go that extra mile to ensure that your processes are backed by our superior support.
                        This support is based out of a wider experience and better understanding of the Indian employment
                        system and labour laws.
                    </p>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>QUALITY ASSURANCE</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                        Understanding the gravity of compliance adherence and need for quality deliverables, BRIFU has a
                        dedicated and qualified team who ensure that all compliance and quality standards are met, tracking
                        every aspect of every process. BRIFU also ensures that your business stays in line with all labour
                        regulations that are amended from time to time.
                    </p>

                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginTop: '1.5rem' }}>
                        We offer a full range of business organizational planning and consulting services; right from formation
                        of legal entities to procedural compliance. Our spectrum of services includes:
                    </p>
                    <ul className="service-check-list">
                        <li>All labour law related registrations</li>
                        <li>Maintenance of statutory books</li>
                        <li>Setting up of Indian subsidiary, branch office and liaison office</li>
                        <li>Expertise and value added opinions for better understanding of Shops and Establishment Act, Factories Act, Provident fund, Employees State Insurance Corporation (ESIC), Professional Tax, Labour Welfare Fund, Contract Labour Regulation Act (CLRA), Provident Fund Trust Management.</li>
                        <li>Complete maintenance of compliance records with emphasis on labour law compliance and statutory compliance requirements.</li>
                        <li>Periodic Compliance Audit.</li>
                    </ul>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>COMPLIANCES OF STATUTORY PROVISION UNDER THE LABOUR LAWS</h3>
                    <ul className="service-check-list">
                        <li>The Apprentices Act, 1961</li>
                        <li>The Contract Labour (R & A) Act 1970 and Rules 1971</li>
                        <li>The Child Labour (Prohibition & Regulation Act (1986)</li>
                        <li>The Minimum Wages act 1948</li>
                        <li>The Payment of Gratuity Act 1972</li>
                        <li>The Industrial Employment Standing Orders Act, 1946</li>
                        <li>The Employees Provident Funds and Miscellaneous Provisions act 1952</li>
                        <li>The Equal Remuneration Act, 1976</li>
                        <li>The Employees State Insurance Act 1948</li>
                        <li>The Payment of Bonus Act 1965</li>
                        <li>The Payment of Wages Act 1936</li>
                        <li>The Factories act 1948</li>
                        <li>The Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959</li>
                        <li>The Industrial Establishments (National and Festival Holidays) Act 1958</li>
                        <li>The Trade Union Act, 1926</li>
                        <li>The Maternity Benefit Act 1961</li>
                        <li>The Labour Welfare Fund Act 1972</li>
                        <li>Professional Tax Act TN 2011</li>
                        <li>The Workmen Compensation Act, 1923</li>
                        <li>Inter State Migrant Workmen (Regulation of Employment & Conditions of Service) Act, 1979</li>
                    </ul>
                </div>
            )
        },
        'recruitment': {
            title: 'Recruitment',
            content: (
                <div>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Change is a constant in this globalized economy and a talented workforce is the only competitive
                        advantage that you can bet on. Every organization is faced with constant pressure to innovate. Yet
                        any long-term strategy hinges on the ability to get the right talent, with the right skills, at the right
                        time, for the right price.
                    </p>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        BRIFU provides comprehensive end-to-end management of your recruitment needs, bridging gaps in
                        your need for skilled workforce and the right people, with the right competencies. We understand
                        that people with the right competencies - Skill, Knowledge and Attitude - can make all the difference
                        to your ambition of bringing in a positive change to your organization.
                    </p>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        With our qualitative and personalized recruitment solutions, we enable you to reduce human resource
                        related operating costs, allowing you to focus on your core activities. Generally, after the shortlisting,
                        you get to recruit your hand-picked candidates, and then they migrate onto your rolls.
                    </p>

                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>RECRUITMENT PROCESS OUTSOURCE (RPO)</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        BRIFU offers complete end-to-end RPO solutions to optimize your recruitment investment. The
                        service offerings that we are able to deliver encompass the following:
                    </p>
                    <ul className="service-check-list">
                        <li>Recruitment/sourcing strategies for client-specific positions including web advertisements, proactive Internet sourcing, and direct sourcing of candidates</li>
                        <li>Candidate screening process includes CV/resume management, management of applications, phone pre-screening, assessment administration, short-listing the most qualified candidates, and client interview coordination and scheduling</li>
                        <li>Managing all communications within the client hiring community and with candidates throughout the hiring process</li>
                        <li>Extending offers of employment to candidates, coordinating all necessary paperwork, coordinating pre-offer logistics (background checks, drug testing, etc.), and managing the candidate rejection process</li>
                        <li>Conducting all post-hire activity, including necessary paperwork, additional screens as mandated by the client (e.g. background check, reference checks, medical examinations,) candidate relocation, and travel.</li>
                        <li>Establishing and managing a partnership network for the hiring program to include other search firms/agencies when recruiting/sourcing assistance is needed</li>
                        <li>We also offer project-based support for any part of the RPO process—whether you need assistance with sourcing, recruiting, screening, interviewing, extending offers or pre- and post-hiring. This solution unbundles the full RPO service to deliver any component, for any position level or profession.</li>
                    </ul>
                </div>
            )
        },
        'accounts-it-filing': {
            title: 'Accounts & IT Filing',
            content: (
                <div>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Expert accounting and income tax filing services to keep your finances in order.
                    </p>
                    <h3 style={{ color: '#349fd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Services Offered:</h3>
                    <ul className="service-check-list">
                        <li>Bookkeeping & Accounting</li>
                        <li>GST Return Filing</li>
                        <li>Income Tax Return (ITR) Filing</li>
                        <li>TDS Return Filing</li>
                        <li>Financial Statement Preparation</li>
                    </ul>
                </div>
            )
        }
    };

    const service = serviceData[id];

    if (!service) {
        return (
            <div className="page-content">
                <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <h2>Service Not Found</h2>
                    <Link to="/services" className="btn btn-primary mt-2">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content">
            <PageHeader
                title={service.title}
                subtitle="Detailed information about our service."
                image={servicesBanner}
            />
            <section className="section bg-white">
                <div className="container">
                    <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary-color)', fontWeight: '500' }}>
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                    <div className="content-block">
                        {service.content}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
