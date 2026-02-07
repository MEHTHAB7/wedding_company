import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#222', color: '#fff', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                {/* Company Info */}
                <div>
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Wedding Co.</h2>
                    <p style={{ color: '#aaa', lineHeight: '1.6' }}>Creating timeless memories for your special day. Professional planning and styling services.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
                    <ul style={{ lineHeight: '2' }}>
                        <li><Link to="/about" style={{ color: '#aaa' }}>About Us</Link></li>
                        <li><Link to="/services" style={{ color: '#aaa' }}>Services</Link></li>
                        <li><Link to="/gallery" style={{ color: '#aaa' }}>Gallery</Link></li>
                        <li><Link to="/contact" style={{ color: '#aaa' }}>Contact</Link></li>
                        <li><Link to="/privacy" style={{ color: '#aaa' }}>Privacy Policy</Link></li>
                        <li><Link to="/admin" style={{ color: '#aaa' }}>Admin Login</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: '#fff' }}><Facebook /></a>
                        <a href="#" style={{ color: '#fff' }}><Instagram /></a>
                        <a href="#" style={{ color: '#fff' }}><Twitter /></a>
                        <a href="#" style={{ color: '#fff' }}><Linkedin /></a>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '2rem', color: '#666' }}>
                <p>&copy; {new Date().getFullYear()} Wedding Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
