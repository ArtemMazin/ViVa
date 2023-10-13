import React from 'react';
import { productList01 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Металлополимерные самосмазывающиеся подшипники',
  description: 'Металлополимерные самосмазывающиеся подшипники ООО "ВиВа Групп"',
};

const products01 = () => {
  const title = presentationImage[0].name;
  const description = `Двухслойный металлополимерный самосмазывающийся подшипник состоит из металлической основы с компаундом из ПТФЭ
  на поверхности. Он легче и имеет лучшие механические и нагрузочные характеристики. Более толстый слой ПТФЭ
  может улучшить гибкость установки, а также соответствовать более широкому расчетному диапазону допусков. Кроме
  того, улучшены износостойкость и шумопоглощение, а также может быть установлен более широкий диапазон
  изменения крутящего момента.`;
  const image = `/image/products01/pro01.jpg`;

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
        productList={productList01}
      />
    </main>
  );
};

export default products01;
