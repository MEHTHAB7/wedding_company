import React from 'react';
import { Helmet } from 'react-helmet-async';

const Booking = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Book Online</title>
                <meta name="description" content="Book an appointment or reserve your wedding date online." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', background: '#fff', minHeight: '90vh', backgroundImage: 'linear-gradient(to right, #f8f9fa, #e9ecef)' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Book an Appointment</h1>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>Let's start planning the most important day of your life.</p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input type="text" placeholder="First Name" style={{ ...inputStyle, flex: 1 }} required />
                            <input type="text" placeholder="Last Name" style={{ ...inputStyle, flex: 1 }} required />
                        </div>

                        <input type="email" placeholder="Email Address" style={inputStyle} required />
                        <input type="tel" placeholder="Phone Number" style={inputStyle} required />

                        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#555' }}>
                            Wedding Date (Tentative)
                            <input type="date" style={inputStyle} />
                        </label>

                        <select style={inputStyle}>
                            <option value="">Select Service Interest</option>
                            <option value="planning">Full Wedding Planning</option>
                            <option value="decor">Decoration & Styling</option>
                            <option value="photography">Photography</option>
                            <option value="other">Other</option>
                        </select>

                        <textarea placeholder="Additional Details / Requirements" rows="4" style={inputStyle}></textarea>

                        <button type="submit" style={{
                            padding: '1rem',
                            background: 'var(--primary-color)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            transition: 'background 0.3s'
                        }}>Request Booking</button>
                    </form>
                </div>
            </div>
        </>
    );
};

const inputStyle = {
    padding: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontFamily: 'inherit',
    width: '100%'
};

export default Booking;
