import React from 'react';
import { materialsList02 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металополимерные подшипники скольжения HMG | ВиВа Групп',
  description:
    'Купите высококачественные металополимерные подшипники скольжения HMG от надежного поставщика ВиВа Групп. Уникальное сочетание металлического сплава и полимера обеспечивает высокую износостойкость и низкий коэффициент трения.',
  openGraph: {
    title: 'Металополимерные подшипники скольжения HMG | ВиВа Групп',
    description:
      'Купите высококачественные металополимерные подшипники скольжения HMG от надежного поставщика ВиВа Групп. Уникальное сочетание металлического сплава и полимера обеспечивает высокую износостойкость и низкий коэффициент трения.',
    url: process.env.URL + '/podshipniki/metalopolimernye_podshipniki',
    images: [
      {
        url: '/image/metalopolimernye_podshipniki/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Metalopolimernye_podshipniki = () => {
  const title = products[1].name;
  const description = products[1].description;
  const image = products[1].img;

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
        materialsList={materialsList02}
      />
    </main>
  );
};

export default Metalopolimernye_podshipniki;
