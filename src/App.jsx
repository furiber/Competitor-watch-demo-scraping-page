import React from 'react';

const LightningIcon = () => (
  <svg xmlns="http://www.开展w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <LightningIcon />
            <span>Launch in under 5 minutes</span>
          </div>
          <h1>
            Spontaneous Connections, <br />
            <span className="text-gradient">Seamlessly Managed.</span>
          </h1>
          <p>
            The zero-friction way to break down silos and build company culture. 
            Smart pairing that respects your org chart, fully automated.
          </p>
          <div className="hero-cta">
            <a href="#demo" className="btn btn-primary">Start Your 5-Minute Setup</a>
            <a href="#features" className="btn btn-outline">See How It Works</a>
          </div>
          <span className="hero-subtext">Perfect for teams of 100-500 people. No engineering required.</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Companies <span className="text-gradient-alt">Love Us</span></h2>
            <p>We've stripped away the complexity of networking programs so you can focus on building a connected culture.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <LightningIcon />
              </div>
              <h3>The "5-Minute Magic" Setup</h3>
              <p>IT and HR teams are stretched thin. That's why we built a zero-friction, self-service setup. Just upload your employee list and launch a high-impact, culture-building initiative in the time it takes to drink your morning coffee.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HeartIcon />
              </div>
              <h3>Culture & Retention in a Hybrid World</h3>
              <p>In remote environments, feeling disconnected is a leading cause of turnover. Regular, low-pressure connections build empathy and a sense of belonging, giving leadership a zero-effort tool for improving employee retention.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <UsersIcon />
              </div>
              <h3>Organizational Intelligence</h3>
              <p>Generic randomizers cause anxiety by matching junior staff with their direct managers. Our algorithm actually respects your company's org chart, guaranteeing safe, cross-functional pairings every single time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to destroy company silos?</h2>
            <p className="hero-subtext" style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#f8fafc' }}>
              Upload your team list and let our algorithm do the heavy lifting.
            </p>
            <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
              Create Your First Matches Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Coffee Roulette. Spontaneous, safe connections.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
