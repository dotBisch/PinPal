export default function DonatePage() {
    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '24px' }}>Support Our Mission</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '48px' }}>
                    Your donation helps us provide food, medical care, and shelter to rescued Aspins and Puspins.
                </p>

                <div className="card" style={{ padding: '48px', display: 'inline-block' }}>
                    <div style={{
                        width: '250px',
                        height: '250px',
                        background: '#eee',
                        margin: '0 auto 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#aaa',
                        fontSize: '1.2rem',
                        border: '2px dashed #ccc',
                        borderRadius: '16px'
                    }}>
                        [QR Code Placeholder]
                    </div>
                    <h3>GCash / Bank Transfer</h3>
                    <p style={{ color: '#666', marginTop: '8px' }}>Scan to donate via GCash</p>
                    <div style={{ marginTop: '24px', padding: '16px', background: '#F9FAFB', borderRadius: '8px' }}>
                        <p><strong>Bank:</strong> BPI</p>
                        <p><strong>Account Name:</strong> PinPal Foundation</p>
                        <p><strong>Account Number:</strong> 1234-5678-90</p>
                    </div>
                </div>

                <div style={{ marginTop: '60px' }}>
                    <h2>Where your money goes</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '32px' }}>
                        <div>
                            <div style={{ fontSize: '2rem', color: '#FFC107' }}>₱500</div>
                            <p>Feeds one rescue for a week</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', color: '#FFC107' }}>₱1,000</div>
                            <p>Provides basic vaccinations</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', color: '#FFC107' }}>₱5,000</div>
                            <p>Supports a spay/neuter surgery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
