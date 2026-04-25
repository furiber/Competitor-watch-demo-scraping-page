import React from 'react';
import { SignupForm } from '../components/SignupForm';
import SEO from '../components/SEO';

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "About TeamBlend | Coffee Roulette for Remote Teams",
      "url": "https://www.coffeerouletteapp.com/about",
      "description": "TeamBlend was built to solve the workplace loneliness problem in remote and hybrid teams. Learn about our mission, our approach, and the research behind our product."
    },
    {
      "@type": "Organization",
      "name": "TeamBlend",
      "url": "https://www.coffeerouletteapp.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.coffeerouletteapp.com/logo.svg"
      },
      "description": "TeamBlend automates cross-functional coffee pairing for remote and hybrid teams. We help organisations of 100–500 people build genuine workplace connections that reduce turnover and improve engagement.",
      "sameAs": []
    }
  ]
};

export default function About() {
  return (
    <>
      <SEO
        title="About TeamBlend | Coffee Roulette for Remote Teams"
        description="TeamBlend was built to solve the workplace loneliness problem in remote and hybrid teams. Learn about our mission and the research behind our product."
        canonical="https://www.coffeerouletteapp.com/about"
        schema={aboutSchema}
      />

      <section className="hero" style={{ minHeight: 'unset', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <h1>
            About <span className="text-gradient">TeamBlend Coffee Roulette</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            We built TeamBlend because we experienced the problem ourselves — and because the research on what actually fixes it is overwhelming clear, yet almost nobody acts on it.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>

            <div className="feature-card">
              <h3>Why We Built This</h3>
              <p>
                When our team went remote, we noticed something that the quarterly engagement survey wasn't capturing: the people who were leaving weren't leaving because of salary or career growth. They were leaving because they felt invisible. They'd spend their entire workday in structured meetings with the same five people, and they had no idea what was happening three departments over — let alone any relationship with the people there.
              </p>
              <p>
                We tried a manual coffee roulette spreadsheet. It worked better than we expected. People who had worked at the same company for two years were having conversations for the first time. Cross-team collaboration improved in ways we hadn't anticipated. The problem was that manual coordination at scale is unsustainable — somebody had to maintain the spreadsheet, track who'd met who, send the introduction emails, and remember to exclude the cases where a junior engineer had been paired with their skip-level manager.
              </p>
              <p>
                TeamBlend automates all of that. Upload your team, connect to Slack or Teams, and the algorithm handles everything else — respecting your org chart, rotating through the organisation, and delivering results inside the tools your team already uses.
              </p>
            </div>

            <div className="feature-card">
              <h3>The Research Behind Our Approach</h3>
              <p>
                TeamBlend is grounded in a specific body of evidence. Cornell CAHRS research (2019) confirms that informal face-to-face communication drives team idea generation and innovation. Gallup data shows that employees without a best friend at work have only a 1-in-12 chance of being engaged. Seramount's Belonging Toolkit (2024), citing HBR research, documents a 50% drop in turnover risk and 56% improvement in job performance for employees with high belonging.
              </p>
              <p>
                The mechanism is not mysterious. Human beings build trust and collaboration through repeated, low-stakes social contact. In a physical office, that contact happens incidentally. In a remote or hybrid team, it has to be structured. TeamBlend is that structure.
              </p>
              <p>
                We are not building a wellness app. We are building a connection infrastructure that produces measurable business outcomes — lower turnover, higher engagement, better cross-functional collaboration — by systematically creating the relationships that remote work tends to prevent.
              </p>
            </div>

            <div className="feature-card">
              <h3>Who We're Built For</h3>
              <p>
                TeamBlend is designed for organisations of 100 to 500 people in remote or hybrid-first environments. At this size, the problem is real — you're too large for organic connection but too small for a dedicated culture team or an enterprise people-ops platform.
              </p>
              <p>
                Our typical customer is a Head of Engineering, VP of People, or department lead who has noticed the silo problem, seen the engagement scores, and wants to do something about it without waiting for a quarterly HR review cycle. They need something that deploys in under 5 minutes, doesn't require IT involvement, and produces visible results within the first two months.
              </p>
              <p>
                We are currently in early access. If you lead a team that fits this profile, we'd like to hear from you.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="features" style={{ background: 'var(--bg-secondary, #f9fafb)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              For questions about early access, partnership opportunities, or press enquiries, reach us at{' '}
              <a href="mailto:hello@coffeerouletteapp.com">hello@coffeerouletteapp.com</a>.
            </p>
            <p>
              <a href="https://app.coffeerouletteapp.com/login" className="btn btn-outline">Login to TeamBlend</a>
            </p>
          </div>
        </div>
      </section>

      <section id="signup" className="signup-section">
        <div className="container">
          <div className="signup-box">
            <div className="signup-header">
              <div className="signup-badge">Early Access</div>
              <h2>Ready to get started?</h2>
              <p>
                Tell us about your team and we'll be in touch with an invite.
                No credit card required.
              </p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
