/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      // Основные разделы
      {
        source:
          '/podshipniki/metalopolimernye_samosmazivayushiesya_podshipniki',
        destination: '/podshipniki/metalopolimernye_samosmazivayushiesya',
        permanent: true,
      },
      {
        source: '/podshipniki/metalicheskie_podshipniki',
        destination: '/podshipniki/metalicheskie',
        permanent: true,
      },
      {
        source: '/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki',
        destination: '/podshipniki/metalicheskie_samosmazivayushiesya',
        permanent: true,
      },
      {
        source: '/podshipniki/metalopolimernye_podshipniki',
        destination: '/podshipniki/metalopolimernye',
        permanent: true,
      },
      {
        source: '/podshipniki/nemetalicheskie_podshipniki',
        destination: '/podshipniki/nemetalicheskie',
        permanent: true,
      },
      {
        source: '/podshipniki/stalnye_samosmazivayushiesya_podshipniki',
        destination: '/podshipniki/stalnye_samosmazivayushiesya',
        permanent: true,
      },
      // Подстраницы
      {
        source: '/podshipniki/metalicheskie_podshipniki/hmg-090',
        destination: '/podshipniki/metalicheskie/hmg-090',
        permanent: true,
      },
      {
        source: '/podshipniki/metalicheskie_podshipniki/hmg-600',
        destination: '/podshipniki/metalicheskie/hmg-600',
        permanent: true,
      },
      {
        source: '/podshipniki/metalicheskie_podshipniki/hmg-800',
        destination: '/podshipniki/metalicheskie/hmg-800',
        permanent: true,
      },
      {
        source: '/podshipniki/metalicheskie_podshipniki/hmg-T90',
        destination: '/podshipniki/metalicheskie/hmg-t90',
        permanent: true,
      },
      {
        source:
          '/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki/hmg-650',
        destination: '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650',
        permanent: true,
      },
      {
        source:
          '/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki/hmg-650GT',
        destination:
          '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650gt',
        permanent: true,
      },
      {
        source:
          '/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki/hmg-85HF',
        destination: '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-85hf',
        permanent: true,
      },
      {
        source: '/podshipniki/metalopolimernye_podshipniki/hmg-20',
        destination: '/podshipniki/metalopolimernye/hmg-20',
        permanent: true,
      },
      {
        source: '/podshipniki/metalopolimernye_podshipniki/hmg-22',
        destination: '/podshipniki/metalopolimernye/hmg-22',
        permanent: true,
      },
      {
        source: '/podshipniki/metalopolimernye_podshipniki/hmg-80',
        destination: '/podshipniki/metalopolimernye/hmg-80',
        permanent: true,
      },
      {
        source:
          '/podshipniki/metalopolimernye_samosmazivayushiesya_podshipniki/hmg-11',
        destination:
          '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-11',
        permanent: true,
      },
      {
        source:
          '/podshipniki/metalopolimernye_samosmazivayushiesya_podshipniki/hmg-50',
        destination:
          '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-50',
        permanent: true,
      },
      {
        source:
          '/podshipniki/metalopolimernye_samosmazivayushiesya_podshipniki/hmg-fr',
        destination:
          '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-fr',
        permanent: true,
      },
      {
        source: '/podshipniki/nemetalicheskie_podshipniki/hmg-EPB',
        destination: '/podshipniki/nemetalicheskie/hmg-epb',
        permanent: true,
      },
      {
        source: '/podshipniki/nemetalicheskie_podshipniki/hmg-FWB',
        destination: '/podshipniki/nemetalicheskie/hmg-fwb',
        permanent: true,
      },
      {
        source:
          '/podshipniki/stalnye_samosmazivayushiesya_podshipniki/hmg-200C',
        destination: '/podshipniki/stalnye_samosmazivayushiesya/hmg-200c',
        permanent: true,
      },
      {
        source: '/podshipniki/stalnye_samosmazivayushiesya_podshipniki/hmg-260',
        destination: '/podshipniki/stalnye_samosmazivayushiesya/hmg-260',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
