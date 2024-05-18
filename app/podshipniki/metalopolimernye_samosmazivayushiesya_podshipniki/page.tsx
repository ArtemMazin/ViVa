import React from 'react';
import { materialsList01 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: products[0].name,
  description: products[0].name,
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
