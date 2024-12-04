import React from 'react';
import { materialsList04 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металлические подшипники HMG | Высокая износостойкость | ВиВа Групп',
  description:
    'Металлические подшипники HMG со смазкой: биметаллические втулки, масляные карманы, специальные канавки. Высокая несущая способность, длительный срок службы.',
  openGraph: {
    title:
      'Металлические подшипники HMG | Надежность в тяжелых условиях | ВиВа Групп',
    description:
      'Промышленные металлические подшипники HMG: стальная оболочка, бронзовый слой, масляные карманы. Работа при высоких нагрузках, техподдержка, доставка.',
    url: process.env.URL + '/podshipniki/metalicheskie',
    images: [
      {
        url: '/image/metalicheskie/pro04.jpg',
        width: 1200,
        height: 630,
        alt: 'Металлические подшипники HMG со смазкой',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalicheskie',
  },
  keywords:
    'металлические подшипники HMG, биметаллические втулки, подшипники со смазкой',
};

const Metalicheskie_podshipniki = () => {
  const title = products[3].name;
  const description = products[3].description;
  const image = products[3].img;

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
        materialsList={materialsList04}
      />
    </main>
  );
};

export default Metalicheskie_podshipniki;
