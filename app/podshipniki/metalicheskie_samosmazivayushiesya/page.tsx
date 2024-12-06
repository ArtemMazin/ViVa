import React from 'react';
import { materialsList03 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металлические самосмазывающиеся подшипники HMG | Без обслуживания', // 71 символ
  description:
    'Инновационные подшипники со встроенными твердыми смазочными материалами в металлической матрице. Высокая ударопрочность, работа без обслуживания, низкий коэффициент трения. Доставка по России.', // 175 символов
  openGraph: {
    title:
      'Металлические самосмазывающиеся подшипники HMG | Высокая надежность',
    description:
      'Подшипники с твердыми смазочными материалами в металлической матрице. Постоянное самосмазывание, высокая жесткость, способность выдерживать ударные нагрузки. Работа в тяжелых условиях.',
    url: process.env.URL + '/podshipniki/metalicheskie_samosmazivayushiesya',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Металлические самосмазывающиеся подшипники HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL + '/podshipniki/metalicheskie_samosmazivayushiesya',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'металлические самосмазывающиеся подшипники, твердые смазочные материалы, высокая ударопрочность, работа без обслуживания',
};

const Metalicheskie_samosmazivayushiesya_podshipniki = () => {
  const title = products[2].name;
  const description = products[2].description;
  const image = products[2].img;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    image: `${process.env.URL}${image}`,
    description: description,
    brand: {
      '@type': 'Brand',
      name: 'HMG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      url: process.env.URL,
    },
    category: 'Подшипники скольжения',
    material: 'Металл с твердыми смазочными материалами',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'RUB',
      seller: {
        '@type': 'Organization',
        name: 'ВиВа Групп',
      },
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <main>
        <BreadCrumbs
          className={'container'}
          currentLink={title}
          links={[
            { href: process.env.URL, name: 'Главнaя' },
            { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          ]}
        />
        <Products
          titleProducts={title}
          descriptionProducts={description}
          productsImage={image}
          materialsList={materialsList03}
        />
      </main>
    </>
  );
};

export default Metalicheskie_samosmazivayushiesya_podshipniki;
