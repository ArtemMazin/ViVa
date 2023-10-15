import React from 'react';
import { productList06 } from '@/utils/productLists';
import { presentationImage } from '@/utils/constants';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Высокопроизводительные стальные самосмазывающиеся подшипники',
  description: 'Высокопроизводительные стальные самосмазывающиеся подшипники ООО "ВиВа Групп"',
};

const products06 = () => {
  const title = presentationImage[5].name;
  const description = `Благодаря использованию специальной обработки поверхности и технологии обработки традиционных стальных гильз повышается износостойкость, противозадирные свойства, ударопрочность и коррозионная стойкость. В то же время особая структура поверхности снижает частоту смазки. При подходящих условиях уплотнения эти высокоточные стальные втулки имеют даже лучшие характеристики, чем самосмазывающиеся подшипники из медного сплава для наружного применения в строительной технике, сельскохозяйственном оборудовании, портовой технике и т. д.`;
  const image = `/image/products06/pro06.jpg`;

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
        productList={productList06}
      />
    </main>
  );
};

export default products06;
