import React from 'react';
import { SignupForm } from '../components/SignupForm';
import { LightningIcon } from '../components/Icons';
import { HowItWorks } from '../components/HowItWorks';

export default function VirtualWatercooler() {
  return (
    <>
      <section className="hero" style={{ minHeight: 'unset', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <h1>
            The Science of the <span className="text-gradient">Water Cooler</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            Organic chance encounters used to drive your company's greatest innovations. Now, they have to be engineered. 
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            <div className="feature-card">
              <div className="feature-icon"><LightningIcon /></div>
              <h3>Spontaneous Innovation</h3>
              <p>
                Cornell research confirms that informal face-to-face communication—even non-work-related chatter—is a primary driver of team idea generation and cross-functional innovation. 
                <br /><br />
                Without these interactions, groups suffer from siloed thinking. When teams lose cross-department connections, innovation halts and groupthink takes over.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><LightningIcon /></div>
              <h3>Guaranteed Serendipity</h3>
              <p>
                Most workplace interaction is spontaneous. In remote or hybrid teams, that spontaneity is fragile.
                <br /><br />
                TeamBlend replaces organic chance with guaranteed cross-functional serendipity. Track records show it works: in a recent corporate trial, automated "coffee roulettes" led to a <strong>72% participant report of substantial morale improvement</strong>. 
              </p>
            </div>

          </div>
        </div>
      </section>

      <HowItWorks />

      <section id="signup" className="signup-section">
        <div className="container">
          <div className="signup-box">
            <div className="signup-header">
              <div className="signup-badge">Early Access</div>
              <h2>Build the Virtual Water Cooler</h2>
              <p>Upload your team and launch your innovation engine today.</p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
