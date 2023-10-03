import React from 'react';
import { productList07 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/products/Products';

export const metadata = {
  title: 'Высокопроизводительные стальные самосмазывающиеся подшипники',
  description: 'Высокопроизводительные стальные самосмазывающиеся подшипники ООО "ВиВа Групп"',
};

const products07 = () => {
  const title = presentationImage[6].name;
  const description = `Благодаря использованию специальной обработки поверхности и технологии обработки традиционных стальных гильз повышается износостойкость, противозадирные свойства, ударопрочность и коррозионная стойкость. В то же время особая структура поверхности снижает частоту смазки. При подходящих условиях уплотнения эти высокоточные стальные втулки имеют даже лучшие характеристики, чем самосмазывающиеся подшипники из медного сплава для наружного применения в строительной технике, сельскохозяйственном оборудовании, портовой технике и т. д.`;
  const image = `products07/pro07.jpg`;

  return (
    <Products
      titleProducts={title}
      descriptionProducts={description}
      backgroundImage={image}
      productList={productList07}
    />
  );
};

export default products07;
