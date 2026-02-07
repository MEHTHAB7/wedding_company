import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid password');
        }
    };

    if (!isLoggedIn) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <form onSubmit={handleLogin} style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: 'block', margin: '1rem 0', padding: '0.5rem', width: '200px' }}
                    />
                    <button type="submit" style={{ padding: '0.5rem 1rem', background: 'var(--primary-color)', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
                </form>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Wedding Company | Admin</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div style={{ padding: '2rem' }}>
                <h1>Admin Dashboard</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <div style={cardStyle}>
                        <h3>Total Bookings</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>24</p>
                    </div>
                    <div style={cardStyle}>
                        <h3>Pending Inquiries</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
                    </div>
                    <div style={cardStyle}>
                        <h3>New Reviews</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>5</p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <h2>Recent Inquiries</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                        <thead>
                            <tr style={{ background: '#f4f4f4', textAlign: 'left' }}>
                                <th style={{ padding: '0.5rem' }}>Name</th>
                                <th style={{ padding: '0.5rem' }}>Service</th>
                                <th style={{ padding: '0.5rem' }}>Date</th>
                                <th style={{ padding: '0.5rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>John Doe</td>
                                <td style={{ padding: '0.5rem' }}>Photography</td>
                                <td style={{ padding: '0.5rem' }}>Aug 12, 2024</td>
                                <td style={{ padding: '0.5rem', color: 'orange' }}>Pending</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Jane Smith</td>
                                <td style={{ padding: '0.5rem' }}>Full Planning</td>
                                <td style={{ padding: '0.5rem' }}>Sep 05, 2024</td>
                                <td style={{ padding: '0.5rem', color: 'green' }}>Confirmed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

const cardStyle = {
    padding: '2rem',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center'
};

export default Admin;
