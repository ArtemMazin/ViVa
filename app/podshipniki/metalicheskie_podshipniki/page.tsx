import React from 'react';
import { materialsList04 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: products[3].name,
  description: products[3].name,
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
