import React from 'react';
import { materialsList03 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: products[2].name,
  description: products[2].name,
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
