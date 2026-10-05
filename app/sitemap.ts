import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mggoldmart.com';
  
  const routes = [
    '',
    '/sell-used-gold',
    '/relese-pledged-gold',
    '/instant-cash',
    '/gallery',
    '/about-us',
    '/contact-us',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
