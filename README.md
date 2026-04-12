# TeamBlend — coffeerouletteapp.com

Zero-friction coffee roulette for remote and hybrid teams. Smart peer matching that respects your org chart, fully automated — no HR red tape.

## What This Repo Is

This is the **marketing website** for TeamBlend at [www.coffeerouletteapp.com](https://www.coffeerouletteapp.com). It is a static single-page application built with React + Vite. It is separate from the product app, which lives at `app.coffeerouletteapp.com`.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — build tool and dev server
- **React Router v7** — client-side routing
- **Pure CSS** — custom properties, no utility framework
- **PostHog** — product analytics (SPA pageview tracking)

## Pages / Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page, hero, features, signup CTA |
| `/business-case` | `BusinessCase.jsx` | ROI and disengagement cost data |
| `/remote-isolation` | `RemoteIsolation.jsx` | Workplace loneliness and remote culture |
| `/virtual-watercooler` | `VirtualWatercooler.jsx` | Science of informal connection |

## Development Setup

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env and fill in your values

# Start dev server
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Environment Variables

See `.env.example` for all required variables.

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API endpoint for the early access signup form |
| `VITE_POSTHOG_KEY` | PostHog project API key (get from posthog.com) |
| `VITE_POSTHOG_HOST` | PostHog instance URL (default: `https://us.i.posthog.com`) |

PostHog is opt-in — if `VITE_POSTHOG_KEY` is not set, analytics are silently skipped.

## Build & Deployment

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Output goes to `dist/`. The site is a SPA — your host must redirect all 404s back to `index.html` for client-side routing to work (Netlify `_redirects`, Vercel `vercel.json` rewrites, Nginx `try_files`, etc.).

## Project Structure

```
src/
  pages/         # One file per route
  components/    # Shared UI: Layout, SignupForm, HowItWorks, Icons
  index.css      # All styles (CSS custom properties + component classes)
  App.jsx        # Router, AnalyticsWrapper (PostHog + GTM pageview tracking)
  main.jsx       # Entry point, PostHog init
public/
  sitemap.xml    # Static sitemap for all 4 routes
```
