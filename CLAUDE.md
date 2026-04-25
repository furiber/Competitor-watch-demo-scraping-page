# Project Instructions

## Sitemap maintenance

`public/sitemap.xml` is the canonical sitemap. On **any** content, routing, SEO, or copy change in this repo, you MUST:

1. Update the `<lastmod>` value to today's date (ISO `YYYY-MM-DD`) for **every** `<url>` entry in `public/sitemap.xml` — not just affected URLs.
2. If a new route is added, add a corresponding `<url>` entry (with today's `<lastmod>`, an appropriate `<changefreq>`, and `<priority>`).
3. If a route is removed, delete its `<url>` entry.
4. Verify the file is valid XML before committing.

This rule is non-negotiable — keep the whole sitemap current on every change.
