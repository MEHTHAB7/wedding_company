import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    return (
        <>
            <Helmet>
                <title>Wedding Company | Privacy Policy</title>
                <meta name="description" content="Our privacy policy and terms of service." />
            </Helmet>
            <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
                <p>Last updated: October 2023</p>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, update your profile, request customer support, or otherwise communicate with us.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to provider, maintain, and improve our services, such as to administer your account and to provide you with customer support.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>3. Sharing of Information</h2>
                    <p>We may share personal information as follows or as otherwise described in this privacy policy:</p>
                    <ul>
                        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Privacy;
