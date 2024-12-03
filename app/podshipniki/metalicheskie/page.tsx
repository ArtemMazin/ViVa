import React from 'react';
import { materialsList04 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Металлические подшипники скольжения HMG | Бронзовые и стальные | ВиВа Групп',
  description:
    'Металлические подшипники скольжения HMG от официального поставщика. Бронзовые и стальные втулки с высокой износостойкостью. Широкий выбор размеров, техническая поддержка, быстрая доставка по России. Гарантия качества.',
  openGraph: {
    title:
      'Металлические подшипники скольжения HMG | Бронзовые и стальные | ВиВа Групп',
    description:
      'Металлические подшипники скольжения HMG: бронзовые и стальные втулки для промышленного оборудования. Высокая износостойкость, длительный срок службы. Техническая поддержка, индивидуальный подбор, доставка по России.',
    url: process.env.URL + '/podshipniki/metalicheskie',
    images: [
      {
        url: '/image/metalicheskie/pro04.jpg',
        width: 1200,
        height: 630,
        alt: 'Металлические подшипники скольжения HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalicheskie',
  },
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
