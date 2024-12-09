import React from 'react';
import { materialsList02 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Металлополимерные подшипники | Высокая нагрузка | ВиВа Групп',
  description:
    'Металлополимерные подшипники с консистентной смазкой от официального поставщика. Высокая нагрузочная способность, низкий коэффициент трения, работа в агрессивных средах. Широкий выбор моделей, техническая поддержка, доставка по России.',
  openGraph: {
    title: 'Металлополимерные подшипники | Высокая нагрузка | ВиВа Групп',
    description:
      'Металлополимерные подшипники: сочетание металлической основы и полимерного покрытия, высокая стойкость к нагрузкам и вибрациям, длительный срок службы. Профессиональная поддержка, индивидуальный подбор.',
    url: process.env.URL + '/podshipniki/metalopolimernye',
    images: [
      {
        url: '/image/metalopolimernye/pro02.jpg',
        width: 1200,
        height: 630,
        alt: 'Металлополимерные подшипники со смазкой',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalopolimernye',
  },
};

const Metalopolimernye_podshipniki = () => {
  const title = products[1].name;
  const description = products[1].description;
  const image = products[1].img;

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
    material: 'Металлополимерный композит',
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Тип смазки',
      value: 'Консистентная смазка',
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
          materialsList={materialsList02}
        />
      </main>
    </>
  );
};

export default Metalopolimernye_podshipniki;
