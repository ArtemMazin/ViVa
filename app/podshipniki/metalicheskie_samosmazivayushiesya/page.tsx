import React from 'react';
import { materialsList03 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Самосмазывающиеся подшипники HMG | Твердые смазочные материалы | Высокая прочность',
  description:
    'Металлические самосмазывающиеся подшипники с твердыми смазочными добавками. Высокая ударопрочность, низкое трение, работа без жидкой смазки.',
  openGraph: {
    title:
      'Самосмазывающиеся подшипники HMG | Для тяжелых условий | Без обслуживания',
    description:
      'Инновационные подшипники с твердыми смазочными материалами в металлической матрице. Высокая жесткость, ударостойкость, длительный срок службы.',
    url: process.env.URL + '/podshipniki/metalicheskie_samosmazivayushiesya',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Самосмазывающиеся подшипники HMG с твердыми смазочными материалами',
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
  keywords:
    'самосмазывающиеся подшипники, твердые смазочные материалы, высокая ударопрочность',
};

const Metalicheskie_samosmazivayushiesya_podshipniki = () => {
  const title = products[2].name;
  const description = products[2].description;
  const image = products[2].img;

  return (
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
  );
};

export default Metalicheskie_samosmazivayushiesya_podshipniki;
