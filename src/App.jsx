import React, { useState } from 'react';

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const API_URL = import.meta.env.VITE_API_URL ?? 'https://app.coffeeroulette.com/api/org-requests';

function SignupForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    contactEmail: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        return;
      }

      if (res.status === 409) {
        setErrorMessage("We already have a request from this address — we'll be in touch.");
      } else if (res.status === 400) {
        setErrorMessage('Please check all required fields and try again.');
      } else {
        setErrorMessage('Something went wrong on our end. Please try again in a moment.');
      }
      setStatus('error');
    } catch {
      setErrorMessage('Unable to reach the server. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" role="alert" aria-live="polite">
        <div className="form-success-icon">
          <CheckCircleIcon />
        </div>
        <h3>You're on the list!</h3>
        <p>
          Thanks! We've received your request and will review it shortly.<br />
          You'll get an email invite once approved.
        </p>
      </div>
    );
  }

  return (
    <form
      id="signup-form"
      className="signup-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="orgName">Organisation name <span className="required">*</span></label>
          <input
            id="orgName"
            name="orgName"
            type="text"
            placeholder="e.g. Acme Engineering"
            value={formData.orgName}
            onChange={handleChange}
            required
            autoComplete="organization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactName">Your name <span className="required">*</span></label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            placeholder="e.g. Jane Smith"
            value={formData.contactName}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contactEmail">Your email <span className="required">*</span></label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          placeholder="jane@acme.com"
          value={formData.contactEmail}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <span className="form-hint">We'll send your invite link here once approved.</span>
      </div>

      <div className="form-group">
        <label htmlFor="message">Anything to add? <span className="optional">(optional)</span></label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder='e.g. "We have 50 people across 3 teams."'
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && (
        <div className="form-error" role="alert" aria-live="assertive">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {errorMessage}
        </div>
      )}

      <button
        id="signup-submit"
        type="submit"
        className="btn btn-primary form-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            Sending request…
          </>
        ) : (
          'Request Early Access'
        )}
      </button>
    </form>
  );
}

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
            <a href="#signup" className="btn btn-primary">Request Early Access</a>
            <a href="#features" className="btn btn-outline">See How It Works</a>
          </div>
          <span className="hero-subtext">Perfect for teams of 100–500 people. No engineering required.</span>
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
              <h3>Culture &amp; Retention in a Hybrid World</h3>
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

      {/* Signup Section */}
      <section id="signup" className="signup-section">
        <div className="container">
          <div className="signup-box">
            <div className="signup-header">
              <div className="signup-badge">Early Access</div>
              <h2>Ready to destroy company silos?</h2>
              <p>
                Tell us a bit about your organisation and we'll review your request.
                You'll receive an invite link once approved — no credit card needed.
              </p>
            </div>
            <SignupForm />
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
