import React from 'react';
import { materialsList06 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Стальные самосмазывающиеся подшипники высокого качества | ВиВа Групп',
  description:
    'Купите высококачественные стальные самосмазывающиеся подшипники от надежного поставщика ВиВа Групп. Широкий ассортимент моделей с различными типами смазочных материалов для различных отраслей промышленности. Обеспечивают длительный срок службы и низкий коэффициент трения.',
  openGraph: {
    title:
      'Стальные самосмазывающиеся подшипники высокого качества | ВиВа Групп',
    description:
      'Купите высококачественные стальные самосмазывающиеся подшипники от надежного поставщика ВиВа Групп. Широкий ассортимент моделей с различными типами смазочных материалов для различных отраслей промышленности. Обеспечивают длительный срок службы и низкий коэффициент трения.',
    url: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya',
    images: [
      {
        url: '/image/stalnye_samosmazivayushiesya/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya',
  },
};

const Stalnye_samosmazivayushiesya_podshipniki = () => {
  const title = products[5].name;
  const description = products[5].description;
  const image = products[5].img;

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
        materialsList={materialsList06}
      />
    </main>
  );
};

export default Stalnye_samosmazivayushiesya_podshipniki;
