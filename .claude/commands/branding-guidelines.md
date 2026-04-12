# TeamBlend Branding Guidelines

Use this document when making any UI, copy, or design decisions for the coffeerouletteapp.com marketing website. Apply these guidelines without being asked — they are the source of truth for all brand decisions.

---

## Brand Identity

**Product name:** TeamBlend
**Domain:** www.coffeerouletteapp.com
**App subdomain:** app.coffeerouletteapp.com
**Tagline:** Spontaneous connections, zero friction.

TeamBlend was formerly called "Coffee Roulette" — the domain retains "coffeeroulette" for SEO continuity, but all UI copy uses "TeamBlend".

---

## Color Palette

All colors are defined as CSS custom properties in `src/index.css` `:root`. Always reference variables rather than hardcoding hex values. New colors must be added to `:root`.

| Role | Name | Hex | CSS Variable |
|---|---|---|---|
| Primary accent | Purple | `#8b5cf6` | `--accent-primary` |
| Secondary accent | Pink | `#ec4899` | `--accent-secondary` |
| Tertiary accent | Teal | `#14b8a6` | `--accent-tertiary` |
| Background | Dark Navy | `#0f172a` | `--bg-dark` |
| Card background | Slate 70% | `rgba(30,41,59,0.7)` | `--bg-card` |
| Body text | Near-white | `#f8fafc` | `--text-main` |
| Muted text | Cool gray | `#94a3b8` | `--text-muted` |
| Glass border | White 10% | `rgba(255,255,255,0.1)` | `--glass-border` |
| Glass glow | Purple 15% | `rgba(139,92,246,0.15)` | `--glass-glow` |

**Never use white backgrounds, light mode, or desaturated neutrals.** The brand is exclusively dark mode.

### Gradients

- **Primary gradient:** `linear-gradient(135deg, #8b5cf6, #ec4899)` — purple to pink. Use for CTAs, hero text highlights, step numbers, badge backgrounds.
- **Alt gradient:** `linear-gradient(135deg, #14b8a6, #3b82f6)` — teal to blue. Use for secondary section highlights, alternative text gradients (`.text-gradient-alt`).
- **Background radials:** Two fixed radial glows — purple at `15% 50%` and pink at `85% 30%` — both at 15% opacity over `#0f172a`.

---

## Typography

| Role | Font | Weights | CSS |
|---|---|---|---|
| Headings (h1–h4), buttons, badges | Outfit | 300, 400, 600, 800 | `font-family: 'Outfit', sans-serif` |
| Body copy, UI text, form labels | Inter | 400, 500, 600 | `font-family: 'Inter', sans-serif` |

Both fonts are loaded from Google Fonts in `src/index.css`. Do not add additional typefaces.

**Weight conventions:**
- Hero h1: Outfit 800, letter-spacing `-0.02em`, gradient text span
- Section h2: Outfit 700–800
- Card/feature h3: Outfit 600
- Body copy: Inter 400, `line-height: 1.6`

**Sizing:** h1 uses `clamp(3rem, 6vw, 5rem)`. h2 uses `clamp(2.5rem, 4vw, 3.5rem)`. Both scale fluidly.

---

## Visual Style

**Dark mode only.** Background `#0f172a` with radial gradient overlays set to `background-attachment: fixed` for a parallax feel.

**Glass-morphism cards:** semi-transparent background (`--bg-card`), `backdrop-filter: blur(10px–12px)`, 1px border using `--glass-border`. Cards should feel like frosted glass floating over the dark background. On hover: `translateY(-10px)` + enhanced border and glow shadow.

**Purple-pink gradients** are the visual signature. Use for:
- `.btn-primary` CTA buttons
- `.text-gradient` hero heading highlights
- `.step-number` circles
- Active states, hover glows, badge backgrounds

**Pill / rounded shapes:** Buttons use `border-radius: 9999px`. Cards use `border-radius: 1.5rem` (24px). Form inputs use `border-radius: 12px`.

**Glow effects:** Important elements carry `box-shadow: 0 4px 15px var(--glass-glow)`. Hover state elevates to `0 8px 30px rgba(139,92,246,0.4)`.

**Animations:**
- `fadeUp`: 1s ease-out (opacity 0→1, translateY 30px→0) — used for section entrances
- `pulseBadge`: 2s infinite box-shadow pulse — used on hero badge
- Transitions: 0.2s–0.4s ease or `cubic-bezier(0.175, 0.885, 0.32, 1.275)` for card hover

---

## Tone of Voice

**Confident and direct.** State facts. Do not hedge with "may", "could", or "might help".

**Data-driven.** Lead with statistics. Quantify the problem before presenting the solution.

**Engineering-first audience.** Primary persona: VP Engineering or CTO at a 100–500 person tech company. Speak to them as peers. Skip HR buzzwords.

**Anti-corporate-jargon.** Banned phrases: "synergies", "leverage" (as verb), "circle back", "boil the ocean", "move the needle", "low-hanging fruit", "reach out", "mandatory team building".

**Short sentences.** One idea per sentence. Paragraphs max 3 sentences.

**CTAs are direct:** "Request Early Access" not "Learn More". "See How It Works" not "Discover Our Features". "Destroy company silos" not "Improve team collaboration".

---

## Component Conventions

Reference `src/index.css` for all existing class names before writing new CSS.

| Class | Purpose |
|---|---|
| `.btn .btn-primary` | Purple-pink gradient pill CTA |
| `.btn .btn-outline` | Ghost button, glass border |
| `.text-gradient` | Purple-pink gradient text (clip-path technique) |
| `.text-gradient-alt` | Teal-blue gradient text |
| `.container` | `max-width: 1200px`, centered, `padding: 0 2rem` |
| `.feature-card` | Glass-morphism feature card with hover lift |
| `.step-card` | How-it-works step card |
| `.signup-box` | CTA conversion box with gradient border |
| `.hero-badge` | Pill badge with pulsing animation |
| `.section-header` | Centered section title + subtitle block |

Always use existing classes and CSS variables. Only write new CSS if no existing pattern applies.

---

## Page Structure Pattern

All content pages follow this layout:
1. **Hero** — h1 headline + 2–3 sentence intro (reduced min-height, not full viewport)
2. **Features/Stats** — grid of `.feature-card` glass cards with supporting data
3. **`<HowItWorks />`** — shared step-by-step component
4. **`<SignupForm />`** — conversion section at bottom

The homepage extends this with a full-viewport hero and additional sections. Do not deviate from the interior page pattern without a strong reason.

---

## What TeamBlend Is NOT

- Not a Slack plugin — it is a standalone web app
- Not a general team-building platform — specifically automated coffee roulette / peer matching
- Not enterprise-only — targets 100–500 person tech companies, not Fortune 500
- Not "fun" or "fluffy" — position it as infrastructure with measurable ROI
- Not HR-led — the buyer persona is engineering and technical leadership
