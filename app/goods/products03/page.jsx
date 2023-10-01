import React from 'react';
import { productList03 } from '@/utils/productLists';
import Products from '@/components/products/Products';

const products03 = () => {
  const title = `Металлические самосмазывающиеся подшипники`;
  const description = `Износостойкая металлическая задняя часть с твердыми смазочными материалами может непрерывно обеспечивать источник смазки во время работы подшипника для достижения функции самосмазывания. Благодаря сочетанию высокой нагрузки и ударопрочности металла, а также низкого коэффициента трения неметалла, этот материал подходит для различных условий работы.`;
  const image = `products03/pro03.jpg`;

  return (
    <Products
      titleProducts={title}
      descriptionProducts={description}
      backgroundImage={image}
      productList={productList03}
    />
  );
};

export default products03;
