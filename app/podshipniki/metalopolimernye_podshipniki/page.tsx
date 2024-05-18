import React from 'react';
import { materialsList02 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: products[1].name,
  description: products[1].name,
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
