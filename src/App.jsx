import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import PetPage from './pages/PetPage';
import DonatePage from './pages/DonatePage';
import ContactForm from './components/ContactForm'; // If needed separately

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </main>
      <footer style={{ background: '#1F2937', color: 'white', padding: '40px 0', marginTop: 'auto' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p>© 2026 PinPal. All rights reserved.</p>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '8px' }}>Designed for Tidal Solutions Tryout Task</p>
        </div>
      </footer>
    </div>
  )
}

export default App
