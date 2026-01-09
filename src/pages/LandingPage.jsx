import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero section" style={{
                background: 'linear-gradient(to right, #FFF3E0, #fff)',
                paddingTop: '60px',
                paddingBottom: '80px'
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div className="hero-content" style={{ flex: 1, minWidth: '300px' }}>
                        <h1 className="animate-fade-in" style={{ marginBottom: '24px' }}>
                            PinPal: Where Every Rescue Finds a <span style={{ color: '#FFC107' }}>Home</span>.
                        </h1>
                        <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: '#666', marginBottom: '32px', maxWidth: '500px' }}>
                            We bridge the gap between street-smart survivors and loving families. Adopt an Aspin or Puspin today and find your soulmate.
                        </p>
                        <div className="hero-buttons animate-fade-in" style={{ display: 'flex', gap: '16px' }}>
                            <button onClick={() => navigate('/pets')} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                                Adopt a Friend
                            </button>
                            <button onClick={() => navigate('/donate')} className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                                Donate
                            </button>
                        </div>
                    </div>
                    <div className="hero-image" style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
                            alt="Happy adopted dog"
                            className="animate-fade-in"
                            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-8">
                        <h2>Our Mission</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
                            We are on a mission to rebrand the local rescue experience. Through creative storytelling and compassionate care, we turn adoption into a celebratory milestone.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '48px' }}>
                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚕️</div>
                            <h3>The "Pin" Standard</h3>
                            <p style={{ color: '#666', marginTop: '12px' }}>
                                Top-tier rehabilitation and socialization to ensure every Aspin and Puspin is ready to thrive in their new home.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>❤️</div>
                            <h3>Heart-First Matching</h3>
                            <p style={{ color: '#666', marginTop: '12px' }}>
                                Our unique personality-based pairing process ensures a lifelong bond between pets and their humans.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏡</div>
                            <h3>Community Core</h3>
                            <p style={{ color: '#666', marginTop: '12px' }}>
                                A support network for "Pin-parents," offering resources, guidance, and a place to share the joy of rescue life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Pets Preview */}
            <section className="section" style={{ background: '#F9FAFB' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2>Meet Our Stars</h2>
                        <button onClick={() => navigate('/pets')} className="btn btn-outline">View All Pets</button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                        {/* Dummy Pet Cards */}
                        {['Bantay', 'Muneng', 'Tagpi'].map((name, i) => (
                            <div key={name} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                                <div style={{ height: '250px', backgroundColor: '#ddd', backgroundImage: `url(https://images.unsplash.com/photo-${i === 0 ? '1517423440428-a5a00ad493e8' : i === 1 ? '1514888286974-6c03e2ca1dba' : '1543466835-00a7907e9de1'}?auto=format&fit=crop&w=400&q=80)`, backgroundSize: 'cover' }}></div>
                                <div style={{ padding: '20px' }}>
                                    <h3>{name}</h3>
                                    <p style={{ color: '#777', fontSize: '0.9rem' }}>{i === 1 ? 'Puspin' : 'Aspin'} • {i + 2} years old</p>
                                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>Adopt Me</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
                        <div>
                            <h2>Get in Touch</h2>
                            <p style={{ color: '#666', marginBottom: '24px', fontSize: '1.1rem' }}>
                                Have questions about adoption? Want to volunteer? Or just want to say hi? Fill out the form and our AI-powered team will get back to you instantly!
                            </p>
                            <div style={{ marginTop: '32px' }}>
                                <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                                    <span>123 Rescue Road, Manila, Philippines</span>
                                </div>
                                <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.5rem' }}>📧</span>
                                    <span>hello@pinpal.ph</span>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ padding: '40px' }}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
