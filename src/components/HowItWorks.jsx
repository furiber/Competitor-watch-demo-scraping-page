import React from 'react';

export function HowItWorks() {
  return (
    <section className="features" style={{ backgroundColor: 'rgba(15, 23, 42, 0.3)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="section-header">
          <h2>How It <span className="text-gradient">Works</span></h2>
          <p>Zero friction from signup to your first matches.</p>
        </div>
        
        <div className="how-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Request Access</h3>
            <p>Fill out our quick signup form. We review requests manually to ensure we only onboard teams we can deliver massive value to.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Add Your Team</h3>
            <p>Upload your participants and tag their leader/manager. Our smart algorithm specifically prevents matching people with their direct reports.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Review & Pair</h3>
            <p>Create the matching instantly. You can review our high-conversion default email template, or customize the messaging to fit your company's tone.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Send Invites</h3>
            <p>Click send. One email goes out to each pair, explaining exactly who they've been matched with and suggesting next steps for their quick coffee.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
