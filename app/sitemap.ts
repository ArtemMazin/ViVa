import { MetadataRoute } from 'next';

const URL = process.env.URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  const mainPages = [
    {
      url: URL,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/podshipniki`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${URL}/delivery`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/catalog`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/contacts`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${URL}/filters`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const bearingCategories = [
    {
      url: `${URL}/podshipniki/metalopolimernye_samosmazivayushiesya`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/podshipniki/metalopolimernye`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/podshipniki/metalicheskie_samosmazivayushiesya`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/podshipniki/metalicheskie`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/podshipniki/nemetalicheskie`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/stalnye_samosmazivayushiesya`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const bearingProducts = [
    {
      url: `${URL}/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-50`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-11`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-fr`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalopolimernye/hmg-20`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalopolimernye/hmg-22`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalopolimernye/hmg-80`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650gt`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie_samosmazivayushiesya/hmg-85hf`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie/hmg-090`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie/hmg-t90`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie/hmg-800`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/metalicheskie/hmg-600`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/nemetalicheskie/hmg-epb`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/nemetalicheskie/hmg-fwb`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/stalnye_samosmazivayushiesya/hmg-200c`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/podshipniki/stalnye_samosmazivayushiesya/hmg-260`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...mainPages, ...bearingCategories, ...bearingProducts];
}
