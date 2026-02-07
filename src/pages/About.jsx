import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | About Us</title>
                <meta name="description" content="Learn more about our journey and team." />
            </Helmet>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '2rem' }}>Our Story</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.1rem', color: '#444' }}>
                    <p>
                        Founded with a passion for love and celebration, <strong>Wedding Co.</strong> has been turning dream weddings into reality for over a decade.
                        We believe that every love story is unique, and your wedding should be a perfect reflection of that story.
                    </p>
                    <p>
                        Our team of expert planners, designers, and coordinators work tirelessly to ensure that every detail is flawless.
                        From the initial consultation to the final dance, we are with you every step of the way.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>500+</h3>
                            <p>Weddings Planned</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>10+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
