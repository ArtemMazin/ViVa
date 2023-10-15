import React from 'react';
import { productList03 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Металлические самосмазывающиеся подшипники',
  description: 'Металлические самосмазывающиеся подшипники ООО "ВиВа Групп"',
};

const products03 = () => {
  const title = presentationImage[2].name;
  const description = `Износостойкая металлическая задняя часть с твердыми смазочными материалами может непрерывно обеспечивать источник смазки во время работы подшипника для достижения функции самосмазывания. Благодаря сочетанию высокой нагрузки и ударопрочности металла, а также низкого коэффициента трения неметалла, этот материал подходит для различных условий работы.`;
  const image = `/image/products03/pro03.jpg`;

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
        productList={productList03}
      />
    </main>
  );
};

export default products03;
