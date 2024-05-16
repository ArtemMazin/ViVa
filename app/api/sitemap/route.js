import { NextResponse } from 'next/server';

const SITE_URL = 'https://viva-hmg.ru';

const getStaticPaths = async () => {
  // Здесь вы можете получить список всех статических путей вашего сайта
  const paths = [
    '/',
    '/about',
    '/goods',
    '/delivery',
    '/catalog',
    '/contacts',
    '/privacy',
    '/goods/products01',
    '/goods/products01/hmg-50',
    '/goods/products01/hmg-11',
    '/goods/products01/hmg-fr',
    '/goods/products02',
    '/goods/products02/hmg-20',
    '/goods/products02/hmg-22',
    '/goods/products02/hmg-80',
    '/goods/products03',
    '/goods/products03/hmg-650',
    '/goods/products03/hmg-650GT',
    '/goods/products03/hmg-85HF',
    '/goods/products04',
    '/goods/products04/hmg-090',
    '/goods/products04/hmg-T90',
    '/goods/products04/hmg-600',
    '/goods/products04/hmg-800',
    '/goods/products05',
    '/goods/products05/hmg-EPB',
    '/goods/products05/hmg-FWB',
    '/goods/products06',
    '/goods/products06/hmg-200C',
    '/goods/products06/hmg-260',
  ];

  return paths;
};

export const GET = async () => {
  const paths = await getStaticPaths();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map(path => {
          return `
            <url>
              <loc>${SITE_URL}${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
};
