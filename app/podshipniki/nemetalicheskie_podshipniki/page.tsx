import React from 'react';
import { materialsList05 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: products[4].name,
  description: products[4].name,
};

const Nemetalicheskie_podshipniki = () => {
  const title = products[4].name;
  const description = products[4].description;
  const image = products[4].img;

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
        materialsList={materialsList05}
      />
    </main>
  );
};

export default Nemetalicheskie_podshipniki;
