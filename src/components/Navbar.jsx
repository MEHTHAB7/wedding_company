import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo">Wedding Co.</h1>
                <div className="mobile-icon" onClick={toggleMenu}>
                    {isOpen ? <X color="white" /> : <Menu color="white" />}
                </div>
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-links" onClick={toggleMenu}>About</Link></li>
                    <li className="nav-item"><Link to="/services" className="nav-links" onClick={toggleMenu}>Services</Link></li>
                    <li className="nav-item"><Link to="/packages" className="nav-links" onClick={toggleMenu}>Packages</Link></li>
                    <li className="nav-item"><Link to="/gallery" className="nav-links" onClick={toggleMenu}>Gallery</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-links" onClick={toggleMenu}>Contact</Link></li>
                    <li className="nav-item"><Link to="/booking" className="nav-links-btn" onClick={toggleMenu}>Book Now</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
