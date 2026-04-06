import React from 'react';
import { LightningIcon, HeartIcon, UsersIcon } from '../components/Icons';
import { SignupForm } from '../components/SignupForm';
import { HowItWorks } from '../components/HowItWorks';

export default function Home() {
  return (
    <>
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
            Smart pairing that respects your org chart, fully automated for modern teams.
          </p>
          <div className="hero-cta">
            <a href="#signup" className="btn btn-primary">Request Early Access</a>
            <a href="#features" className="btn btn-outline">See How It Works</a>
          </div>
          <span className="hero-subtext">Perfect for teams of 100–500 people. Zero HR red tape.</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Fast-Moving Teams <span className="text-gradient-alt">Love Us</span></h2>
            <p>We've stripped away the complexity of networking programs so you can focus on building a connected culture instantly.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <LightningIcon />
              </div>
              <h3>The 5-Minute Rollout</h3>
              <p>Team leads shouldn't wait weeks for an HR enterprise rollout. Upload your team list and launch a high-impact, culture-building initiative in the time it takes to drink your morning coffee. By shifting the power to department heads and team leads, TeamBlend ensures you can act on cultural decay immediately instead of waiting for a quarterly review cycle.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HeartIcon />
              </div>
              <h3>Retention in a Hybrid World</h3>
              <p>In remote environments, isolation drives turnover. Regular, low-pressure connections build empathy and belonging, giving engineering and product leads an immediate tool for improving retention without forced fun. According to Harvard Business Review, high sense of belonging drops turnover risk by a massive 50%.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <UsersIcon />
              </div>
              <h3>Organizational Intelligence</h3>
              <p>Generic randomizers cause anxiety by matching junior staff with their direct managers. Our algorithm actually respects your org chart, guaranteeing safe, cross-functional pairings every time. We analyze the reporting lines you provide when uploading team members, and ensure that every interaction feels genuinely serendipitous and completely pressure-free.</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

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
    </>
  );
}
