import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { question: "How far in advance should we book?", answer: "We recommend booking at least 6-12 months in advance to ensure availability." },
    { question: "Do you offer custom packages?", answer: "Yes! All our packages are customizable to suit your specific needs and budget." },
    { question: "Do you handle destination weddings?", answer: "Absolutely! We specialize in destination weddings across the globe." },
    { question: "What is your cancellation policy?", answer: "We offer a flexible cancellation policy up to 30 days before the event. Details are in our contract." },
    { question: "Can we use our own vendors?", answer: "Yes, you are welcome to use your own vendors. We also have a list of trusted partners if you need recommendations." },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>Wedding Company | FAQ</title>
                <meta name="description" content="Common questions about our wedding services." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>Frequently Asked Questions</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '1rem 0' }}
                            >
                                <h3 style={{ fontSize: '1.2rem', color: '#333' }}>{faq.question}</h3>
                                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            {activeIndex === index && (
                                <p style={{ color: '#666', lineHeight: '1.6', paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)' }}>
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQ;
