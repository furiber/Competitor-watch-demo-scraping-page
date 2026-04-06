import React from 'react';
import { SignupForm } from '../components/SignupForm';
import { UsersIcon } from '../components/Icons';
import { HowItWorks } from '../components/HowItWorks';

export default function RemoteIsolation() {
  return (
    <>
      <section className="hero" style={{ minHeight: 'unset', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <h1>
            Combating <span className="text-gradient">Workplace Loneliness</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            1 in 5 remote workers is lonely. It's destroying productivity and driving turnover. Stop treating loneliness as a HR problem and start solving it systematically.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            <div className="feature-card">
              <div className="feature-icon"><UsersIcon /></div>
              <h3>The Silent Productivity Killer</h3>
              <p>
                Gallup reports that 1 in 5 employees worldwide reports feeling lonely at work often. Meanwhile, UK government research estimates workplace loneliness costs employers £2.5 billion per year—with 64% of that cost coming directly from increased worker turnover.
                <br /><br />
                If your engineers don't feel connected, they <em>will</em> leave.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><UsersIcon /></div>
              <h3>Solving it with TeamBlend</h3>
              <p>
                A recent study of 804 remote workers showed that organizations providing <strong>structured social support</strong> see significant correlations with job satisfaction. 
                <br /><br />
                TeamBlend is that structured support. In 5 minutes, our smart algorithm pairs your people up, proactively prevents awkward manager-junior matchups, and scales human connection across your entire remote org without the "forced fun" vibe.
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
              <h2>Connect your remote team.</h2>
              <p>No credit cards. Just five minutes to launch a connected culture.</p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
