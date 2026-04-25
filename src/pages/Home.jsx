import React from 'react';
import { LightningIcon, HeartIcon, UsersIcon } from '../components/Icons';
import { SignupForm } from '../components/SignupForm';
import { HowItWorks } from '../components/HowItWorks';
import SEO from '../components/SEO';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "TeamBlend",
      "url": "https://www.coffeerouletteapp.com/"
    },
    {
      "@type": "WebPage",
      "name": "Coffee Roulette App for Teams | TeamBlend",
      "url": "https://www.coffeerouletteapp.com/",
      "description": "Automated team pairing that respects your org chart. Break down silos and build culture. Launch in 5 minutes. No credit card."
    },
    {
      "@type": "SoftwareApplication",
      "name": "TeamBlend",
      "url": "https://www.coffeerouletteapp.com/",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Employee Engagement",
      "operatingSystem": "WebBrowser",
      "description": "Coffee roulette app that automates cross-functional team pairing. Integrates with Slack and Microsoft Teams. Respects org chart to prevent awkward manager-junior matches.",
      "featureList": [
        "Automated cross-functional pairing algorithm",
        "Org chart hierarchy awareness",
        "Slack and Microsoft Teams integration",
        "5-minute setup",
        "Configurable pairing cadence",
        "Participation tracking"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free early access"
      }
    },
    {
      "@type": "Organization",
      "name": "TeamBlend",
      "url": "https://www.coffeerouletteapp.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.coffeerouletteapp.com/logo.svg",
        "width": 200,
        "height": 60
      },
      "sameAs": []
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO
        title="Coffee Roulette App for Teams | TeamBlend"
        description="Automated team pairing that respects your org chart. Break down silos and build culture. Launch in 5 minutes. No credit card."
        canonical="https://www.coffeerouletteapp.com/"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <LightningIcon />
            <span>Launch in under 5 minutes</span>
          </div>
          <h1>
            Coffee Roulette App <br />
            <span className="text-gradient">for Remote Teams</span>
          </h1>
          <p>
            The zero-friction coffee roulette app for remote and hybrid teams.
            Smart pairing that respects your org chart — automated via Slack or Microsoft Teams.
          </p>
          <div className="hero-cta">
            <a href="#signup" className="btn btn-primary">Request Early Access</a>
            <a href="#features" className="btn btn-outline">See How It Works</a>
          </div>
          <span className="hero-subtext">Perfect for teams of 100–500 people. Zero HR red tape. No credit card required.</span>
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
              <p>
                Team leads shouldn't wait weeks for an enterprise HR rollout. Upload your team list, connect to Slack or Microsoft Teams, and launch a high-impact culture-building initiative in the time it takes to drink your morning coffee.
              </p>
              <p>
                By shifting the power to department heads and team leads, TeamBlend ensures you can act on cultural decay immediately — not at the next quarterly review.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HeartIcon />
              </div>
              <h3>Retention in a Hybrid World</h3>
              <p>
                In remote environments, isolation drives turnover. Regular, low-pressure connections build empathy and belonging. According to{' '}
                <a href="https://seramount.com/wp-content/uploads/2024/12/Toolkit_Measuring-Belonging-in-the-Workplace.pdf" target="_blank" rel="noopener noreferrer">
                  Seramount's Belonging Toolkit
                </a>{' '}
                (citing HBR research), high workplace belonging cuts turnover risk by <strong>50%</strong>, boosts job performance by 56%, and reduces sick days by 75%.
              </p>
              <p>
                TeamBlend gives engineering and product leads an immediate, low-friction tool for improving retention — no forced fun required.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <UsersIcon />
              </div>
              <h3>Organizational Intelligence</h3>
              <p>
                Generic randomizers cause anxiety by matching junior staff with their direct managers. Our algorithm reads the reporting lines you provide and guarantees safe, cross-functional pairings — every single time.
              </p>
              <p>
                Every interaction feels genuinely serendipitous and completely pressure-free, which is exactly what makes it work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="features" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2>Works Where Your Team <span className="text-gradient-alt">Already Lives</span></h2>
            <p>TeamBlend delivers pairing notifications and accepts RSVP responses directly inside the tools your team uses every day.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Slack Integration</h3>
              <p>
                TeamBlend sends pairing notifications as Slack DMs. Team members confirm or reschedule without leaving the app. No extra logins, no new tabs to forget.
              </p>
            </div>
            <div className="feature-card">
              <h3>Microsoft Teams Integration</h3>
              <p>
                For Microsoft Teams environments, TeamBlend delivers the same seamless pairing experience. Works alongside your existing channels and does not require admin installation rights.
              </p>
            </div>
            <div className="feature-card">
              <h3>Email Fallback</h3>
              <p>
                No Slack or Teams? TeamBlend sends pairing invitations via email with one-click calendar integration. Every team member participates, regardless of tech stack.
              </p>
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
