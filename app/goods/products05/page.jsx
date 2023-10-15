import React from 'react';
import { productList05 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Неметаллические самосмазывающиеся подшипники',
  description: 'Неметаллические самосмазывающиеся подшипники ООО "ВиВа Групп"',
};

const products05 = () => {
  const title = presentationImage[4].name;
  const description = `К неметаллическим самосмазывающимся подшипникам относятся пластиковые подшипники HMG-EPB и подшипники с накрученной нитью серии HMG-FWB, они подходят для применения с сухой смазкой. Подшипники серии HMG-EPB изготавливаются методом впрыскивания из высокоэффективного инженерного пластика, смешанного с соответствующими усилителями и смазочными материалами, что может значительно улучшить несущую способность подшипника и ударопрочность подшипника. Встроенные смазочные материалы могут значительно снизить коэффициент трения.`;
  const image = `/image/products05/pro05.jpg`;

  return (
    <main>
      <BreadCrumbs
        className={'container'}
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
        productList={productList05}
      />
    </main>
  );
};

export default products05;
