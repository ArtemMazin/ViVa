import React from 'react';
import { materialsList01 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металополимерные самосмазывающиеся подшипники HMG | ВиВа Групп',
  description:
    'Купите высококачественные металополимерные самосмазывающиеся подшипники HMG от надежного поставщика ВиВа Групп. Широкий ассортимент износостойких и долговечных подшипников для различных отраслей промышленности.',
  openGraph: {
    title: 'Металополимерные самосмазывающиеся подшипники HMG | ВиВа Групп',
    description:
      'Купите высококачественные металополимерные самосмазывающиеся подшипники HMG от надежного поставщика ВиВа Групп. Широкий ассортимент износостойких и долговечных подшипников для различных отраслей промышленности.',
    url:
      process.env.URL +
      '/podshipniki/metalopolimernye_samosmazivayushiesya_podshipniki',
    images: [
      {
        url: '/image/metalopolimernye_samosmazivayushiesya_podshipniki/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Metalopolimernye_samosmazivayushiesya_podshipniki = () => {
  const title = products[0].name;
  const description = products[0].description;
  const image = products[0].img;

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
        materialsList={materialsList01}
      />
    </main>
  );
};

export default Metalopolimernye_samosmazivayushiesya_podshipniki;
