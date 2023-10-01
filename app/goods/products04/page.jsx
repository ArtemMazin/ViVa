import React from 'react';
import { productList04 } from '@/utils/productLists';
import Products from '@/components/products/Products';

const products04 = () => {
  const title = `Биметаллические подшипники, требующие смазки`;
  const description = `Биметаллический композитный материал подшипника CSB представляет собой стальную оболочку с низким коэффициентом трения и превосходной износостойкостью, бронзовый порошок в качестве несущего слоя, разработанные масляные карманы, канавки и отверстия подходят для применения со смазкой, чтобы улучшить значение PV. Несущие слои включают свинцовую бронзу, бессвинцовую бронзу и бессвинцовую бронзу с твердой смазкой для обеспечения высокой производительности.`;
  const image = `products04/pro04.jpg`;

  return (
    <Products
      titleProducts={title}
      descriptionProducts={description}
      backgroundImage={image}
      productList={productList04}
    />
  );
};

export default products04;
