import React from 'react';
import Products from '@/components/products/Products';
import { productList06 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Гидравлические компоненты',
  description: 'Гидравлические компоненты ООО "ВиВа Групп"',
};

const products06 = () => {
  const title = presentationImage[5].name;
  const description = `К неметаллическим самосмазывающимся подшипникам относятся пластиковые подшипники HMG-EPB и подшипники с накрученной нитью серии HMG-FWB, они подходят для применения с сухой смазкой. Подшипники серии HMG-EPB изготавливаются методом впрыскивания из высокоэффективного инженерного пластика, смешанного с соответствующими усилителями и смазочными материалами, что может значительно улучшить несущую способность подшипника и ударопрочность подшипника. Встроенные смазочные материалы могут значительно снизить коэффициент трения.`;
  const image = `/image/products06/pro06.jpg`;

  return (
    <main className='container'>
      <BreadCrumbs
        currentLink={title}
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
        ]}
      />

      <Products
        titleProducts={title}
        descriptionProducts={description}
        productsImage={image}
        productList={productList06}
      />
    </main>
  );
};

export default products06;
