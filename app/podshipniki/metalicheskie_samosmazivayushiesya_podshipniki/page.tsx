import React from 'react';
import { materialsList03 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металлические самосмазывающиеся подшипники скольжения | ВиВа Групп',
  description:
    'Купите высококачественные металлические самосмазывающиеся подшипники скольжения от надежного поставщика ВиВа Групп. Обладают высокой износостойкостью, низким коэффициентом трения и длительным сроком службы без смазки.',
  openGraph: {
    title: 'Металлические самосмазывающиеся подшипники скольжения | ВиВа Групп',
    description:
      'Купите высококачественные металлические самосмазывающиеся подшипники скольжения от надежного поставщика ВиВа Групп. Обладают высокой износостойкостью, низким коэффициентом трения и длительным сроком службы без смазки.',
    url:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya_podshipniki/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
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
