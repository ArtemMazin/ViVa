import React from 'react';
import { materialsList02 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Стальные самосмазывающиеся подшипники HMG | Длительный срок службы | ВиВа Групп',
  description:
    'Стальные самосмазывающиеся подшипники HMG от официального поставщика. Инновационные смазочные материалы, минимальное трение, максимальная долговечность. Широкий выбор моделей, техническая поддержка, доставка по России.',
  openGraph: {
    title:
      'Стальные самосмазывающиеся подшипники HMG | Длительный срок службы | ВиВа Групп',
    description:
      'Стальные самосмазывающиеся подшипники HMG: передовые технологии смазки, высокая надежность, длительный срок службы. Решения для тяжелых условий эксплуатации. Профессиональная поддержка, индивидуальный подбор.',
    url: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya',
    images: [
      {
        url: '/image/stalnye_samosmazivayushiesya/pro06.jpg',
        width: 1200,
        height: 630,
        alt: 'Стальные самосмазывающиеся подшипники HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya',
  },
};

const Metalopolimernye_podshipniki = () => {
  const title = products[1].name;
  const description = products[1].description;
  const image = products[1].img;

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
        materialsList={materialsList02}
      />
    </main>
  );
};

export default Metalopolimernye_podshipniki;
