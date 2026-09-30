import type { APIRoute } from 'astro';
import { site } from '../../site.config';

// Generated rather than kept as a static file so the sitemap URL can never
// drift from `site.url` when the domain changes.
export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = (astroSite ?? new URL(site.url)).origin;
  return new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${origin}/sitemap-index.xml`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
