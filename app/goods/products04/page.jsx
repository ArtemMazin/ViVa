import React from 'react';
import { productList04 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/products/Products';

export const metadata = {
  title: 'Биметаллические подшипники, требующие смазки',
  description: 'Биметаллические подшипники ООО "ВиВа Групп", требующие смазки',
};

const products04 = () => {
  const title = presentationImage[3].name;
  const description = `Биметаллический композитный материал подшипника HMG представляет собой стальную оболочку с низким коэффициентом трения и превосходной износостойкостью, бронзовый порошок в качестве несущего слоя, разработанные масляные карманы, канавки и отверстия подходят для применения со смазкой, чтобы улучшить значение PV. Несущие слои включают свинцовую бронзу, бессвинцовую бронзу и бессвинцовую бронзу с твердой смазкой для обеспечения высокой производительности.`;
  const image = `/image/products04/pro04.jpg`;

  return (
    <Products
      titleProducts={title}
      descriptionProducts={description}
      productsImage={image}
      productList={productList04}
    />
  );
};

export default products04;
