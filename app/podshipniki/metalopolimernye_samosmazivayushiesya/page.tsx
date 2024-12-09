import React from 'react';
import { materialsList01 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металополимерные подшипники HMG | Работа без смазки | ВиВа Групп',
  description:
    'Металополимерные самосмазывающиеся подшипники HMG от официального поставщика. Эффективная работа без смазки, высокая износостойкость, длительный срок службы. Техническая поддержка, широкий выбор размеров, доставка по России.',
  openGraph: {
    title: 'Металополимерные подшипники HMG | Работа без смазки | ВиВа Групп',
    description:
      'Металополимерные самосмазывающиеся подшипники HMG: инновационные решения для работы без смазки. Высокая износостойкость, низкое трение, надежность в эксплуатации. Индивидуальный подбор, техническая поддержка.',
    url: process.env.URL + '/podshipniki/metalopolimernye_samosmazivayushiesya',
    images: [
      {
        url: '/image/metalopolimernye_samosmazivayushiesya/pro01.jpg',
        width: 1200,
        height: 630,
        alt: 'Металополимерные самосмазывающиеся подшипники HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL + '/podshipniki/metalopolimernye_samosmazivayushiesya',
  },
};

const Metalopolimernye_samosmazivayushiesya_podshipniki = () => {
  const title = products[0].name;
  const description = products[0].description;
  const image = products[0].img;

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
    material: 'Металлополимерный композит с ПТФЭ',
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Тип',
      value: 'Самосмазывающийся',
    },
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
          materialsList={materialsList01}
        />
      </main>
    </>
  );
};

export default Metalopolimernye_samosmazivayushiesya_podshipniki;
