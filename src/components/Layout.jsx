import React from 'react';
import { Link } from 'react-router-dom';
import { CoffeeIcon } from './Icons';

export function Header() {
  return (
    <header className="main-header">
      {/* Brand */}
      <Link to="/" className="brand-logo">
        <div className="brand-icon">
          <CoffeeIcon size={40} />
        </div>
        <span className="brand-text">
          TeamBlend
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="main-nav">
        <Link to="/business-case" className="nav-link">ROI Case</Link>
        <Link to="/remote-isolation" className="nav-link">Remote Culture</Link>
        <Link to="/virtual-watercooler" className="nav-link">Science</Link>
        <a href="https://app.coffeerouletteapp.com/login" className="nav-link" style={{ fontWeight: 600, marginLeft: '1rem' }}>Login</a>
        <a href="#signup" className="btn btn-primary nav-btn">Get Started</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <nav style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Home</Link>
          <Link to="/business-case" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>View the business case for coffee roulette</Link>
          <Link to="/remote-isolation" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Remote workplace loneliness</Link>
          <Link to="/virtual-watercooler" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Virtual water cooler science</Link>
          <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>About TeamBlend</Link>
        </nav>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} TeamBlend. Spontaneous connections, zero friction.</p>
      </div>
    </footer>
  );
}
