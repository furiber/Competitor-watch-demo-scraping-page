import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const builtIndexPath = path.join(distDir, 'index.html');

const routeSEO = {
  '/': {
    title: 'PeakHome NZ — Your Home, Looked After',
    description:
      'PeakHome NZ connects Auckland homeowners with reliable, vetted tradespeople. Fast response, fixed pricing, and quality you can trust.',
    canonical: 'https://competitor-watch-demo-scraping-page.vercel.app/',
    h1: 'Your home, looked after.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'PeakHome NZ — Your Home, Looked After',
      url: 'https://competitor-watch-demo-scraping-page.vercel.app/',
      description:
        'PeakHome NZ connects Auckland homeowners with reliable, vetted tradespeople. Fast response, fixed pricing, and quality you can trust.',
    },
  },
  '/services': {
    title: 'Services — PeakHome NZ',
    description:
      'PeakHome NZ offers plumbing, electrical, roofing, painting, landscaping, and general maintenance across Auckland. Licensed, insured tradespeople.',
    canonical: 'https://competitor-watch-demo-scraping-page.vercel.app/services',
    h1: 'Trade services for every home',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Services — PeakHome NZ',
      url: 'https://competitor-watch-demo-scraping-page.vercel.app/services',
      description:
        'PeakHome NZ offers plumbing, electrical, roofing, painting, landscaping, and general maintenance across Auckland. Licensed, insured tradespeople.',
    },
  },
  '/pricing': {
    title: 'Pricing — PeakHome NZ',
    description:
      'Transparent pricing from PeakHome NZ. Hourly, flat-rate callout, and monthly subscription plans for Auckland homeowners.',
    canonical: 'https://competitor-watch-demo-scraping-page.vercel.app/pricing',
    h1: 'No surprises, ever',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Pricing — PeakHome NZ',
      url: 'https://competitor-watch-demo-scraping-page.vercel.app/pricing',
      description:
        'Transparent pricing from PeakHome NZ. Hourly, flat-rate callout, and monthly subscription plans for Auckland homeowners.',
    },
  },
  '/about': {
    title: 'About Us — PeakHome NZ',
    description:
      'PeakHome NZ was founded in Auckland in 2018. We\'re a team of trade veterans on a mission to make home maintenance honest, predictable, and stress-free.',
    canonical: 'https://competitor-watch-demo-scraping-page.vercel.app/about',
    h1: 'Built by tradies, for homeowners',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Us — PeakHome NZ',
      url: 'https://competitor-watch-demo-scraping-page.vercel.app/about',
      description:
        'PeakHome NZ was founded in Auckland in 2018. We\'re a team of trade veterans on a mission to make home maintenance honest, predictable, and stress-free.',
    },
  },
  '/blog': {
    title: 'Blog — PeakHome NZ',
    description:
      'Homeowner guides, seasonal maintenance tips, and trade advice from the PeakHome NZ team in Auckland.',
    canonical: 'https://competitor-watch-demo-scraping-page.vercel.app/blog',
    h1: 'Tips, guides & trade advice',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Blog — PeakHome NZ',
      url: 'https://competitor-watch-demo-scraping-page.vercel.app/blog',
      description:
        'Homeowner guides, seasonal maintenance tips, and trade advice from the PeakHome NZ team in Auckland.',
    },
  },
  '/contact': {
    title: 'Contact — PeakHome NZ',
    description:
      'Get in touch with PeakHome NZ. Book a tradie, request a quote, or ask us anything. Based in Auckland, serving all of greater Auckland.',
    canonical: 'https://competitor-watch-demo-scraping-page.vercel.app/contact',
    h1: 'Let\'s sort your home',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Contact — PeakHome NZ',
      url: 'https://competitor-watch-demo-scraping-page.vercel.app/contact',
      description:
        'Get in touch with PeakHome NZ. Book a tradie, request a quote, or ask us anything. Based in Auckland, serving all of greater Auckland.',
    },
  },
};

const OG_IMAGE = 'https://competitor-watch-demo-scraping-page.vercel.app/og-image.png';

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const buildRouteShell = ({ h1 }) => `
<div id="root">
  <main style="padding-top: 80px; min-height: 100vh;">
    <section class="hero" style="min-height: unset; padding-top: 4rem; padding-bottom: 2rem;">
      <div class="container hero-content">
        <h1>${escapeHtml(h1)}</h1>
      </div>
    </section>
  </main>
</div>`.trim();

const upsertMetaTag = (html, matcher, tag) =>
  html.match(matcher) ? html.replace(matcher, tag) : html.replace('</head>', `    ${tag}\n  </head>`);

const applyRouteSEO = (html, { title, description, canonical, h1, schema }) => {
  let output = html;

  // Title: replace existing tag, or inject one when the template has none.
  // The browser enforces a single <title>, so this cannot produce duplicates.
  // In the browser, react-helmet-async will update this value at runtime.
  if (output.match(/<title>[\s\S]*?<\/title>/i)) {
    output = output.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  } else {
    output = output.replace('</head>', `  <title>${escapeHtml(title)}</title>\n  </head>`);
  }

  // Description: same upsert pattern.
  if (output.match(/<meta\s+name="description"[^>]*>/i)) {
    output = output.replace(
      /<meta\s+name="description"[^>]*>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`,
    );
  } else {
    output = output.replace(
      '</head>',
      `  <meta name="description" content="${escapeHtml(description)}" />\n  </head>`,
    );
  }

  if (output.match(/<link\s+rel="canonical"[^>]*>/i)) {
    output = output.replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonical}" />`,
    );
  } else {
    output = output.replace('</head>', `    <link rel="canonical" href="${canonical}" />\n  </head>`);
  }

  output = upsertMetaTag(
    output,
    /<meta\s+property="og:type"[^>]*>/i,
    '<meta property="og:type" content="website" />',
  );
  output = upsertMetaTag(
    output,
    /<meta\s+property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${canonical}" />`,
  );
  output = upsertMetaTag(
    output,
    /<meta\s+property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  output = upsertMetaTag(
    output,
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  output = upsertMetaTag(
    output,
    /<meta\s+property="og:image"[^>]*>/i,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
  );
  output = upsertMetaTag(
    output,
    /<meta\s+name="twitter:card"[^>]*>/i,
    '<meta name="twitter:card" content="summary_large_image" />',
  );
  output = upsertMetaTag(
    output,
    /<meta\s+name="twitter:title"[^>]*>/i,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  output = upsertMetaTag(
    output,
    /<meta\s+name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  );
  output = upsertMetaTag(
    output,
    /<meta\s+name="twitter:image"[^>]*>/i,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  );
  output = output.match(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i)
    ? output.replace(
        /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
      )
    : output.replace(
        '</head>',
        `    <script type="application/ld+json">${JSON.stringify(schema)}</script>\n  </head>`,
      );

  output = output.replace('<div id="root"></div>', buildRouteShell({ h1 }));
  return output;
};

const writeRouteHtml = async (route, html) => {
  if (route === '/') {
    await writeFile(path.join(distDir, 'index.html'), html);
    return;
  }

  const routeDir = path.join(distDir, route.replace(/^\//, ''));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), html);
};

const baseHtml = await readFile(builtIndexPath, 'utf8');

await Promise.all(
  Object.entries(routeSEO).map(async ([route, seo]) => {
    const routeHtml = applyRouteSEO(baseHtml, seo);
    await writeRouteHtml(route, routeHtml);
  }),
);

console.log(`Prerendered static HTML shells for ${Object.keys(routeSEO).length} routes.`);
