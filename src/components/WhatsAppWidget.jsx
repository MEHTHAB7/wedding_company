import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: '#25D366',
                color: '#fff',
                padding: '1rem',
                borderRadius: '50%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppWidget;
