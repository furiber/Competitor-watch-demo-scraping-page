import React from 'react';
import { SignupForm } from '../components/SignupForm';
import { HeartIcon } from '../components/Icons';
import { HowItWorks } from '../components/HowItWorks';

export default function BusinessCase() {
  return (
    <>
      <section className="hero" style={{ minHeight: 'unset', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <h1>
            The $483B Cost of <span className="text-gradient">Disengagement</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            Disengagement is an invisible tax on your engineering output. You can't fix it with another mandatory meeting. The data shows belonging drives performance—and TeamBlend automates belonging.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            <div className="feature-card">
              <div className="feature-icon"><HeartIcon /></div>
              <h3>The Retention ROI</h3>
              <p>
                According to the Harvard Business Review, a high sense of workplace belonging is linked to a <strong>56% increase in job performance</strong>, a <strong>50% drop in turnover risk</strong>, and a 75% reduction in sick days.
                <br /><br />
                Turnover costs up to 2x an employee's annual salary. By fostering cross-functional friendships, TeamBlend directly targets the isolation that drives talented people to seek jobs elsewhere.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><HeartIcon /></div>
              <h3>The Fast Rollout for Team Leads</h3>
              <p>
                Waiting for an enterprise HR platform rollout takes months. TeamBlend is built for technical leaders and department heads who need to solve morale <em>today</em>. 
                <br /><br />
                Upload your team, set the cadence, and our tracking algorithm ensures safe, cross-functional pairings. Zero friction. Zero meetings required to set it up.
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
              <div className="signup-badge">Fix Your Culture</div>
              <h2>Stop guessing. Start pairing.</h2>
              <p>Get early access to the zero-friction engine for high-performing teams.</p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
