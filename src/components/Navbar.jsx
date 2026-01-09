import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="brand">
                    Pin<span>Pal</span> 🐾
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/pets">Adopt</Link>
                    <Link to="/donate">Donate</Link>
                    <a href="/#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    )
}
