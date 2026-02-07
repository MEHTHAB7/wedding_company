import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const reviews = [
    { name: "Sarah & Mike", date: "June 2024", text: "Absolutely incredible service! The team took care of everything.", rating: 5 },
    { name: "Emily & James", date: "August 2024", text: "Our dream wedding came to life thanks to Wedding Co. Highly recommended!", rating: 5 },
    { name: "Jessica & Tom", date: "May 2024", text: "Professional, creative, and attentive. They made our day perfect.", rating: 5 },
    { name: "Linda & Chris", date: "October 2023", text: "Best decision we made was hiring them. Stress-free planning!", rating: 5 }
];

const Testimonials = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Testimonials</title>
                <meta name="description" content="Read what our happy couples have to say." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', background: '#fff' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>Love Notes</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            background: '#f9f9f9',
                            borderRadius: '8px',
                            borderLeft: '5px solid var(--primary-color)'
                        }}>
                            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />)}
                            </div>
                            <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{review.text}"</p>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.2rem' }}>{review.name}</h4>
                            <span style={{ fontSize: '0.9rem', color: '#888' }}>{review.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonials;
