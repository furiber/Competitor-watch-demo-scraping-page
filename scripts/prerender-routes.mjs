import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const builtIndexPath = path.join(distDir, 'index.html');

const routeSEO = {
  '/': {
    title: 'Coffee Roulette App for Teams | TeamBlend',
    description:
      'Automated team pairing that respects your org chart. Break down silos and build culture. Launch in 5 minutes. No credit card.',
    canonical: 'https://www.coffeerouletteapp.com/',
    h1: 'Coffee Roulette App for Remote and Hybrid Teams',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Coffee Roulette App for Teams | TeamBlend',
      url: 'https://www.coffeerouletteapp.com/',
      description:
        'Automated team pairing that respects your org chart. Break down silos and build culture. Launch in 5 minutes. No credit card.',
    },
  },
  '/business-case': {
    title: 'ROI of Employee Connection Programs | TeamBlend',
    description:
      'The $483B disengagement cost — and how structured coffee pairing reduces turnover. Business case data for HR leaders.',
    canonical: 'https://www.coffeerouletteapp.com/business-case',
    h1: 'Coffee Roulette ROI: The Business Case for Employee Connection',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'ROI of Employee Connection Programs | TeamBlend',
      url: 'https://www.coffeerouletteapp.com/business-case',
      description:
        'The $483B disengagement cost — and how structured coffee pairing reduces turnover. Business case data for HR leaders.',
    },
  },
  '/remote-isolation': {
    title: 'Combating Remote Workplace Loneliness | TeamBlend',
    description:
      '1 in 5 remote workers feels lonely. Gallup data shows the cost — and how TeamBlend fixes it systematically.',
    canonical: 'https://www.coffeerouletteapp.com/remote-isolation',
    h1: 'How to Reduce Remote Workplace Loneliness',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Combating Remote Workplace Loneliness | TeamBlend',
      url: 'https://www.coffeerouletteapp.com/remote-isolation',
      description:
        '1 in 5 remote workers feels lonely. Gallup data shows the cost — and how TeamBlend fixes it systematically.',
    },
  },
  '/virtual-watercooler': {
    title: 'Virtual Water Cooler App for Teams | TeamBlend',
    description:
      'Cornell research confirms spontaneous conversations drive innovation. TeamBlend engineers serendipity for remote teams.',
    canonical: 'https://www.coffeerouletteapp.com/virtual-watercooler',
    h1: 'Virtual Water Cooler for Remote Team Innovation',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Virtual Water Cooler App for Teams | TeamBlend',
      url: 'https://www.coffeerouletteapp.com/virtual-watercooler',
      description:
        'Cornell research confirms spontaneous conversations drive innovation. TeamBlend engineers serendipity for remote teams.',
    },
  },
  '/about': {
    title: 'About TeamBlend | Coffee Roulette for Remote Teams',
    description:
      'TeamBlend was built to solve the workplace loneliness problem in remote and hybrid teams. Learn about our mission and the research behind our product.',
    canonical: 'https://www.coffeerouletteapp.com/about',
    h1: 'About TeamBlend: Coffee Roulette for Teams',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About TeamBlend | Coffee Roulette for Remote Teams',
      url: 'https://www.coffeerouletteapp.com/about',
      description:
        'TeamBlend was built to solve the workplace loneliness problem in remote and hybrid teams. Learn about our mission and the research behind our product.',
    },
  },
};

const OG_IMAGE = 'https://www.coffeerouletteapp.com/og-image.png';

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
  output = output.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  if (output.match(/<meta\s+name="description"[^>]*>/i)) {
    output = output.replace(
      /<meta\s+name="description"[^>]*>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`,
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
