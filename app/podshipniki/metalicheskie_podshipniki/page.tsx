import React from 'react';
import { materialsList04 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металлические подшипники скольжения высокого качества | ВиВа Групп',
  description:
    'Купите высококачественные металлические подшипники скольжения от надежного поставщика ВиВа Групп. Широкий ассортимент материалов и размеров для различных отраслей промышленности. Обеспечивают высокую износостойкость и длительный срок службы.',
  openGraph: {
    title: 'Металлические подшипники скольжения высокого качества | ВиВа Групп',
    description:
      'Купите высококачественные металлические подшипники скольжения от надежного поставщика ВиВа Групп. Широкий ассортимент материалов и размеров для различных отраслей промышленности. Обеспечивают высокую износостойкость и длительный срок службы.',
    url: process.env.URL + '/podshipniki/metalicheskie_podshipniki',
    images: [
      {
        url: '/image/metalicheskie_podshipniki/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
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
