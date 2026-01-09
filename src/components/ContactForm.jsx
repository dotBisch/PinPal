import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // REPLACE THIS URL with your actual n8n Webhook URL (Test or Production)
            // Example: 'http://localhost:5678/webhook-test/pinpal-contact'
            const WEBHOOK_URL = 'http://localhost:5678/webhook-test/pinpal-contact';

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted to n8n successfully');
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // For demo purposes, if the webhook fails (e.g., n8n not running), 
            // we can either show an error or simulate success. 
            // Let's show an error so you know to fix the connection.
            alert("Note: Could not connect to n8n. Please ensure Docker is running and the Webhook URL is correct.\n\nCheck console for details.");
            setStatus('idle');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center animate-fade-in">
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ color: '#10B981' }}>Message Received!</h3>
                <p style={{ color: '#666', marginTop: '8px' }}>
                    Thank you for reaching out, {formData.name || 'Friend'}!
                    <br />Our AI agent is reviewing your message and will send a personalized response to your email shortly.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="btn btn-outline"
                    style={{ marginTop: '24px' }}
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FFC107'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
            </div>

            <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FFC107'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
            </div>

            <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to ask about adopting Bantay..."
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FFC107'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
                style={{ marginTop: '8px', opacity: status === 'submitting' ? 0.7 : 1 }}
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'submitting' && (
                <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                    Connecting to PinPal Automation...
                </p>
            )}
        </form>
    );
}
