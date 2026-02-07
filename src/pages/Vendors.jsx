import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Music, Utensils, Flower2 } from 'lucide-react';

const vendors = [
    { name: "Lens Magic Studios", category: "Photography", icon: <Camera size={30} />, desc: "Award-winning photographers capturing timeless moments." },
    { name: "Bloom & Petal", category: "Florist", icon: <Flower2 size={30} />, desc: "Exquisite floral arrangements sourced globally." },
    { name: "Gourmet Delight", category: "Catering", icon: <Utensils size={30} />, desc: "Culinary masterpieces for every palate." },
    { name: "Rhythm Beats", category: "Music & DJ", icon: <Music size={30} />, desc: "Setting the perfect vibe for your celebration." },
];

const Vendors = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Trusted Vendors</title>
                <meta name="description" content="Meet our trusted wedding partners." />
            </Helmet>
            <div style={{ padding: '4rem 2rem' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>Our Trusted Partners</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {vendors.map((vendor, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary-color)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ background: '#f9f9f9', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-color)' }}>
                                {vendor.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{vendor.name}</h3>
                            <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: '#f0f0f0', borderRadius: '20px', fontSize: '0.8rem', color: '#666', marginBottom: '1rem' }}>{vendor.category}</span>
                            <p style={{ color: '#777' }}>{vendor.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Vendors;
