import React from 'react';
import { materialsList06 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Стальные самосмазывающиеся подшипники высокого качества | ВиВа Групп',
  description:
    'Купите высококачественные стальные самосмазывающиеся подшипники от надежного поставщика ВиВа Групп. Широкий ассортимент моделей с различными типами смазочных материалов для различных отраслей промышленности. Обеспечивают длительный срок службы и низкий коэффициент трения.',
  openGraph: {
    title:
      'Стальные самосмазывающиеся подшипники высокого качества | ВиВа Групп',
    description:
      'Купите высококачественные стальные самосмазывающиеся подшипники от надежного поставщика ВиВа Групп. Широкий ассортимент моделей с различными типами смазочных материалов для различных отраслей промышленности. Обеспечивают длительный срок службы и низкий коэффициент трения.',
    url: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya',
    images: [
      {
        url: '/image/stalnye_samosmazivayushiesya/pro01.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya',
  },
};

const Stalnye_samosmazivayushiesya_podshipniki = () => {
  const title = products[5].name;
  const description = products[5].description;
  const image = products[5].img;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    image: `${process.env.URL}${image}`,
    description: description,
    brand: {
      '@type': 'Brand',
      name: 'HMG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      url: process.env.URL,
    },
    category: 'Подшипники скольжения',
    material: 'Сталь со специальным покрытием',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Тип',
        value: 'Самосмазывающийся',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Высокая износостойкость',
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'RUB',
      seller: {
        '@type': 'Organization',
        name: 'ВиВа Групп',
      },
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
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
          materialsList={materialsList06}
        />
      </main>
    </>
  );
};

export default Stalnye_samosmazivayushiesya_podshipniki;
