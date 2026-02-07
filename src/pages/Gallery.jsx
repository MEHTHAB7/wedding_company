import React from 'react';
import { Helmet } from 'react-helmet-async';

const images = [
    "https://images.unsplash.com/photo-1519225421980-715cb0201b28?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80"
];

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Gallery</title>
                <meta name="description" content="View our portfolio of beautiful weddings." />
            </Helmet>
            <div style={{ padding: '4rem 2rem' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Our Portfolio</h1>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>Moments we've cherished creating.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {images.map((img, index) => (
                        <div key={index} style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                            <img
                                src={img}
                                alt={`Wedding moment ${index + 1}`}
                                style={{ width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
