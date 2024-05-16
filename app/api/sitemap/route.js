import fs from 'fs';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const sitemapPath = new URL('../../../sitemap.xml', import.meta.url);

  try {
    const sitemapContent = await fs.promises.readFile(sitemapPath, 'utf-8');

    return new NextResponse(sitemapContent, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  } catch (error) {
    console.error('Error reading sitemap.xml:', error);
    return new NextResponse('Error reading sitemap.xml', { status: 500 });
  }
};
