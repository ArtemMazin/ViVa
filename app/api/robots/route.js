export const GET = request => {
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: https://viva-hmg.ru/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  );
};
