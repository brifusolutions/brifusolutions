import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle, image }) => {
    return (
        <div
            className="page-header"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="page-header-overlay">
                <div className="container text-center">
                    <h1 className="page-title">{title}</h1>
                    {subtitle && <p className="page-subtitle">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
