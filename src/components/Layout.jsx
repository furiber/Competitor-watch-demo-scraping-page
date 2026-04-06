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
        <a href="https://app.coffeeroulette.com/login" className="nav-link" style={{ fontWeight: 600, marginLeft: '1rem' }}>Login</a>
        <a href="#signup" className="btn btn-primary nav-btn">Get Started</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} TeamBlend. Spontaneous connections, zero friction.</p>
      </div>
    </footer>
  );
}
