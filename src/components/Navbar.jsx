import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return {
            textDecoration: 'none',
            color: isActive ? '#D32F2F' : '#333',
            borderBottom: isActive ? '3px solid #D32F2F' : '3px solid transparent',
            paddingBottom: '4px',
            transition: 'all 0.2s ease'
        };
    };

    return (
        <nav className="navbar" style={{
            height: 'var(--nav-height)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: isScrolled ? '#ffffff' : 'transparent',
            boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
        }}>
            <div className="container nav-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="brand" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    textDecoration: 'none',
                    color: 'white',
                    textShadow: '2px 2px 0px #D32F2F, -1px -1px 0 #D32F2F, 1px -1px 0 #D32F2F, -1px 1px 0 #D32F2F, 1px 1px 0 #D32F2F'
                }}>
                    Pin<span style={{ color: '#D32F2F', textShadow: '2px 2px 0px #fff' }}>Pal</span>
                </Link>
                <div className="nav-links" style={{ display: 'flex', gap: '40px', fontWeight: '700', fontSize: '1.1rem' }}>
                    <Link to="/" style={getLinkStyle('/')}>Home</Link>
                    <Link to="/pets" style={getLinkStyle('/pets')}>Pets</Link>
                    <Link to="/donate" style={getLinkStyle('/donate')}>Donate</Link>
                </div>
            </div>
        </nav>
    )
}
