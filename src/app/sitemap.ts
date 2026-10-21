import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date('2026-10-21T00:00:00.000Z');

  const routes = ['', '/legal/privacy', '/legal/terms'];

  return routes.flatMap((route) => [
    {
      url: `${baseUrl}/ar${route}`,
      lastModified,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.5,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${route}`,
      lastModified,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 0.9 : 0.5,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    },
  ]);
}
