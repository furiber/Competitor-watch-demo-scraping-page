import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import './index.css'
import App from './App.jsx'

// Initialize PostHog once before the React tree renders.
// Route-change pageviews are fired by AnalyticsWrapper in App.jsx.
if (import.meta.env.VITE_POSTHOG_KEY) {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    capture_pageview: false,  // fired manually in AnalyticsWrapper on route change
    capture_pageleave: true,
  })
}

// Strip prerendered SEO tags before react-helmet-async takes ownership.
// Crawlers that don't execute JS see the static prerendered tags; in the
// browser this runs synchronously before React renders so react-helmet-async
// can inject its own copies without creating duplicates.
[
  'link[rel="canonical"]',
  'meta[name="description"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'script[type="application/ld+json"]',
].forEach((sel) => document.querySelectorAll(sel).forEach((el) => el.remove()));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
