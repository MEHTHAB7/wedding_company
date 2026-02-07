import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Contact Us</title>
                <meta name="description" content="Get in touch with us for your dream wedding." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', background: '#f4f4f4', minHeight: '80vh' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>Get in Touch</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    background: '#fff',
                    padding: '2rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Contact Information</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Phone color="var(--accent-color)" /> <span>+1 234 567 8900</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Mail color="var(--accent-color)" /> <span>hello@weddingco.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <MapPin color="var(--accent-color)" /> <span>123 Love Lane, Romance City, NY</span>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98513088459391!3d40.74881717932791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629815598145!5m2!1sen!2sus"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Send us a Message</h3>
                        <input type="text" placeholder="Your Name" style={inputStyle} required />
                        <input type="email" placeholder="Your Email" style={inputStyle} required />
                        <textarea placeholder="Your Message" rows="5" style={inputStyle} required></textarea>
                        <button type="submit" className="btn" style={{ marginTop: '1rem', cursor: 'pointer' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
};

const inputStyle = {
    padding: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontFamily: 'inherit'
};

export default Contact;
