import React from 'react';
import { materialsList05 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Неметаллические подшипники скольжения высокого качества | ВиВа Групп',
  description:
    'Купите высококачественные неметаллические подшипники скольжения от надежного поставщика ВиВа Групп. Широкий ассортимент полимерных и композитных материалов для различных отраслей промышленности. Обеспечивают низкий коэффициент трения и высокую износостойкость.',
  openGraph: {
    title:
      'Неметаллические подшипники скольжения высокого качества | ВиВа Групп',
    description:
      'Купите высококачественные неметаллические подшипники скольжения от надежного поставщика ВиВа Групп. Широкий ассортимент полимерных и композитных материалов для различных отраслей промышленности. Обеспечивают низкий коэффициент трения и высокую износостойкость.',
    url: process.env.URL + '/podshipniki/nemetalicheskie_podshipniki',
    images: [
      {
        url: '/image/nemetalicheskie_podshipniki/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Nemetalicheskie_podshipniki = () => {
  const title = products[4].name;
  const description = products[4].description;
  const image = products[4].img;

  return (
    <main>
      <BreadCrumbs
        className={'container'}
        currentLink={title}
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
        ]}
      />

      <Products
        titleProducts={title}
        descriptionProducts={description}
        productsImage={image}
        materialsList={materialsList05}
      />
    </main>
  );
};

export default Nemetalicheskie_podshipniki;
