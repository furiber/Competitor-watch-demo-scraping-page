# PeakHome NZ

A static marketing website for PeakHome NZ — Auckland's trusted network of vetted tradespeople.

**Live URL:** [https://competitor-watch-demo-scraping-page.vercel.app](https://competitor-watch-demo-scraping-page.vercel.app/)

## Site Structure

```text
index.html              Home page
services.html           Six trade services
pricing.html            Three pricing plans + comparison table
about.html              Company story and team
contact.html            Contact form and details
blog/
  index.html            Article index
  winter-prep-guide.html
  choosing-a-tradesperson.html
  deck-maintenance-tips.html
styles.css              Shared stylesheet (all pages)
public/
  sitemap.xml           Canonical sitemap
vercel.json             Vercel deployment config
```

## Tech Stack

Plain HTML, CSS, and minimal vanilla JS (nav toggle only). No frameworks, no build step. Open any `.html` file in a browser to preview locally.

## Deployment

Push to `main` — Vercel deploys automatically. `vercel.json` enables clean URLs (no `.html` extension) and disables trailing slashes.

---

## Updating content for Rival Watch testing

### Editing a page's content

1. Open the relevant `.html` file in your editor (e.g. `services.html`).
2. Make your content changes.
3. Open `public/sitemap.xml` and update the `<lastmod>` value for that page's `<url>` entry to today's date in `YYYY-MM-DD` format.
4. Commit and push — Vercel redeploys automatically.

### Updating a page's `lastmod` in sitemap.xml

Open `public/sitemap.xml` and find the `<url>` block for the page you changed. Update the `<lastmod>` line:

```xml
<lastmod>2026-05-20</lastmod>
```

Per the project rules in `CLAUDE.md`, **all** `<lastmod>` values must be updated to today's date on every content, routing, or SEO change — not just the affected URL.

### Adding a new blog post

1. Copy an existing post file, e.g.:

   ```bash
   cp blog/deck-maintenance-tips.html blog/my-new-post.html
   ```

2. Edit the new file: update `<title>`, `<meta name="description">`, `<link rel="canonical">`, the article header, and the article body content.
3. Add the new post to `blog/index.html` — copy one of the existing `.blog-card` anchor blocks and update the `href`, image emoji/background, date, title, and excerpt.
4. Add a link to the new post from the home page (`index.html`) "From the Blog" section if you want it featured there.
5. Add a new `<url>` entry to `public/sitemap.xml`:

   ```xml
   <url>
     <loc>https://competitor-watch-demo-scraping-page.vercel.app/blog/my-new-post</loc>
     <lastmod>2026-05-20</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.7</priority>
   </url>
   ```

6. Update **all** other `<lastmod>` values in the sitemap to today's date.
7. Commit and push.
