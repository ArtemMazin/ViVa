import React from 'react';
import { productList02 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Металлополимерные подшипники, требующие смазки',
  description: 'Металлополимерные подшипники, требующие смазки ООО "ВиВа Групп"',
};

const products02 = () => {
  const title = presentationImage[1].name;
  const description = `Двухслойный металлополимерный самосмазывающийся подшипник состоит из металлической основы с компаундом из ПТФЭ
  на поверхности. Он легче и имеет лучшие механические и нагрузочные характеристики. Более толстый слой ПТФЭ
  может улучшить гибкость установки, а также соответствовать более широкому расчетному диапазону допусков. Кроме
  того, улучшены износостойкость и шумопоглощение, а также может быть установлен более широкий диапазон
  изменения крутящего момента.`;
  const image = `/image/products02/pro02.jpg`;

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
        productList={productList02}
      />
    </main>
  );
};

export default products02;
