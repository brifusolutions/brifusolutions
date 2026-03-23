import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logo} alt="BRIFU SOLUTIONS Logo" className="logo-image" />
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? "bar active" : "bar"}></div>
                    <div className={isOpen ? "bar active" : "bar"}></div>
                    <div className={isOpen ? "bar active" : "bar"}></div>
                </div>

                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>About Us</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to="/services" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Services</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/services/company-formation" onClick={closeMenu}>COMPANY FORMATION & REGISTRATION</NavLink></li>
                            <li><NavLink to="/services/payroll-processing" onClick={closeMenu}>PAYROLL PROCESSING</NavLink></li>
                            <li><NavLink to="/services/statutory-compliance" onClick={closeMenu}>STATUTORY COMPLIANCES MANAGEMENT</NavLink></li>
                            <li><NavLink to="/services/recruitment" onClick={closeMenu}>RECRUITMENT</NavLink></li>
                            <li><NavLink to="/services/accounts-it-filing" onClick={closeMenu}>ACCOUNTS & IT FILING</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/why-us" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Why Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reviews" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Reviews</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Contact</NavLink>
                    </li>
                    <li className="nav-item nav-cita">
                        <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get Started</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
