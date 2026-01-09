import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import AnimatedButton from '../components/AnimatedButton';
import backgroundImg from '../assets/Background.png';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero section" style={{
                backgroundColor: 'var(--color-primary)',
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right center', /* Keep dog visible on the right */
                backgroundRepeat: 'no-repeat',
                minHeight: '820px',
                paddingTop: 'var(--nav-height)', /* Space for fixed navbar */
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
            }}>
                <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>

                    {/* Hero Content */}
                    <div className="hero-content" style={{
                        flex: 1,
                        maxWidth: '700px', /* Ensure text stays to the left */
                        zIndex: 2,
                        paddingRight: '20px' /* Small gap just in case */
                    }}>
                        <h1 className="animate-fade-in" style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 800,
                            fontSize: 'clamp(4rem, 8.2vw, 6.875rem)', /* Target 119px */
                            lineHeight: 1.1,
                            color: '#333',
                            marginBottom: '24px'
                        }}>
                            <span style={{ color: '#D32F2F' }}>Love</span> Has<br />No Pedigree
                        </h1>
                        <p className="animate-fade-in" style={{
                            fontSize: '1.375rem',
                            color: '#444',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            fontWeight: 600
                        }}>
                            Give a local dog or cat the chance they’ve been waiting for.
                        </p>
                        <AnimatedButton
                            text="Meet our PinPals"
                            onClick={() => navigate('/pets')}
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
