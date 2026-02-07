import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Music, Utensils, Flower2, CalendarCheck, Gem } from 'lucide-react';

const servicesList = [
    { icon: <CalendarCheck size={40} />, title: "Wedding Planning", desc: "Complete A-Z planning, timeline management, and coordination." },
    { icon: <Flower2 size={40} />, title: "Floral & Decor", desc: "Stunning floral arrangements and theme-based decorations." },
    { icon: <Camera size={40} />, title: "Photography & Video", desc: "Cinematic wedding films and candid photography." },
    { icon: <Utensils size={40} />, title: "Catering", desc: "Exquisite cuisines and menu curation for your guests." },
    { icon: <Music size={40} />, title: "Entertainment", desc: "Live bands, DJs, and cultural performances." },
    { icon: <Gem size={40} />, title: "Bridal Styling", desc: "Makeup, hair, and styling for the bride and groom." },
];

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Services</title>
                <meta name="description" content="Explore our wedding planning and decoration services." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>Our Premium Services</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {servicesList.map((service, index) => (
                        <div key={index} style={{
                            background: '#fff',
                            padding: '2rem',
                            borderRadius: '10px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{service.title}</h3>
                            <p style={{ color: '#666' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
