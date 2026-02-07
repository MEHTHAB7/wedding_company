import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';

const packages = [
    {
        name: "Silver Package",
        price: "$2,000",
        features: ["Day-of Coordination", "Vendor Management", "Timeline Creation", "Unlimited Email Support"]
    },
    {
        name: "Gold Package",
        price: "$5,000",
        features: ["Full Service Planning", "Design & Styling", "Budget Management", "Vendor Selection & Management", "Rehearsal Coordination"],
        recommended: true
    },
    {
        name: "Platinum Package",
        price: "$8,000",
        features: ["Everything in Gold", "RSVP Management", "Honeymoon Planning", "Bridal Styling Assistance", "Unlimited Meetings"]
    }
];

const Packages = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Packages</title>
                <meta name="description" content="Choose from our exclusive wedding packages." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>Wedding Packages</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {packages.map((pkg, index) => (
                        <div key={index} style={{
                            background: pkg.recommended ? '#fff' : '#fff',
                            padding: '2rem',
                            borderRadius: '10px',
                            boxShadow: pkg.recommended ? '0 8px 25px rgba(212, 175, 55, 0.3)' : '0 5px 15px rgba(0,0,0,0.1)',
                            border: pkg.recommended ? '2px solid var(--primary-color)' : 'none',
                            transform: pkg.recommended ? 'scale(1.05)' : 'scale(1)',
                            position: 'relative'
                        }}>
                            {pkg.recommended && <span style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-color)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>Most Popular</span>}
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>{pkg.name}</h3>
                            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '2rem' }}>{pkg.price}</p>

                            <ul style={{ textAlign: 'left', marginBottom: '2rem' }}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: '#555' }}>
                                        <Check size={18} color="green" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                background: pkg.recommended ? 'var(--primary-color)' : 'var(--accent-color)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}>Select Package</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Packages;
