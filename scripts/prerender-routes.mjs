import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const builtIndexPath = path.join(distDir, 'index.html');

const routeSEO = {
  '/': {
    title: 'Coffee Roulette App for Teams | TeamBlend',
    h1: 'Coffee Roulette App for Remote and Hybrid Teams',
  },
  '/business-case': {
    title: 'ROI of Employee Connection Programs | TeamBlend',
    h1: 'Coffee Roulette ROI: The Business Case for Employee Connection',
  },
  '/remote-isolation': {
    title: 'Combating Remote Workplace Loneliness | TeamBlend',
    h1: 'How to Reduce Remote Workplace Loneliness',
  },
  '/virtual-watercooler': {
    title: 'Virtual Water Cooler App for Teams | TeamBlend',
    h1: 'Virtual Water Cooler for Remote Team Innovation',
  },
  '/about': {
    title: 'About TeamBlend | Coffee Roulette for Remote Teams',
    h1: 'About TeamBlend: Coffee Roulette for Teams',
  },
};

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

const applyRouteSEO = (html, { title, h1 }) => {
  let output = html;

  // Inject/replace <title>. react-helmet-async will update it at runtime;
  // the browser enforces a single <title>, so there is no risk of duplication.
  // All other SEO tags (description, canonical, OG, Twitter, schema) are
  // managed exclusively by react-helmet-async to avoid duplicate-tag errors.
  if (output.match(/<title>[\s\S]*?<\/title>/i)) {
    output = output.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  } else {
    output = output.replace('</head>', `  <title>${escapeHtml(title)}</title>\n  </head>`);
  }

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
