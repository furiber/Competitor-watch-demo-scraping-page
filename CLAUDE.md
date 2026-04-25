# Project Instructions

## Sitemap maintenance

`public/sitemap.xml` is the canonical sitemap. Whenever any page-content or routing change is made (any edit under `src/pages/**`, `index.html`, or addition/removal of a route), you MUST update the `<lastmod>` field in `public/sitemap.xml` for every affected URL to today's date (ISO `YYYY-MM-DD`).

If a new route is added, add a corresponding `<url>` entry. If a route is removed, remove it. Always verify all `<lastmod>` values reflect a real recent edit — do not bulk-bump dates without a corresponding content change.
