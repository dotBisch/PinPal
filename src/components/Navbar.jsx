import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar" style={{
            height: 'var(--nav-height)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container nav-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="brand" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    textDecoration: 'none',
                    color: 'white',
                    textShadow: '2px 2px 0px #D32F2F, -1px -1px 0 #D32F2F, 1px -1px 0 #D32F2F, -1px 1px 0 #D32F2F, 1px 1px 0 #D32F2F' /* Cartoonish outline */
                }}>
                    Pin<span style={{ color: '#D32F2F', textShadow: '2px 2px 0px #fff' }}>Pal</span>
                </Link>
                <div className="nav-links" style={{ display: 'flex', gap: '40px', fontWeight: '700' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
                    <Link to="/pets" style={{ textDecoration: 'none', color: '#333' }}>Pets</Link>
                    <Link to="/donate" style={{ textDecoration: 'none', color: '#333' }}>Donate</Link>
                </div>
            </div>
        </nav>
    )
}
