import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Co. | Your Dream Wedding</title>
                <meta name="description" content="Premium wedding planning services. We create unforgettable moments for your special day." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <h1>Your Dream Wedding Awaits</h1>
                    <p>Exquisite Planning. Flawless Execution. Unforgettable Memories.</p>
                    <Link to="/booking" className="btn">Start Your Journey</Link>
                </div>
            </header>

            {/* Services Highlight */}
            <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Our Expertise</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3>Full Planning</h3>
                        <p>From concept to completion, we handle it all.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3>Decor & Design</h3>
                        <p>Breathtaking aesthetics tailored to your vision.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3>Photography</h3>
                        <p>Capturing every beautiful moment forever.</p>
                    </div>
                </div>
                <div style={{ marginTop: '3rem' }}>
                    <Link to="/services" style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem' }}>View All Services &rarr;</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
