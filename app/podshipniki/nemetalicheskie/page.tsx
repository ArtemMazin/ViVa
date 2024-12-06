import React from 'react';
import { materialsList05 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Неметаллические подшипники скольжения HMG | Полимерные и композитные | ВиВа Групп',
  description:
    'Неметаллические подшипники HMG от официального поставщика. Полимерные и композитные материалы с низким коэффициентом трения. Устойчивость к агрессивным средам, высокая износостойкость. Техническая поддержка, доставка по России.',
  openGraph: {
    title:
      'Неметаллические подшипники скольжения HMG | Полимерные и композитные | ВиВа Групп',
    description:
      'Неметаллические подшипники HMG: современные полимерные и композитные материалы для сложных условий эксплуатации. Химическая стойкость, низкое трение, длительный срок службы. Индивидуальный подбор решений.',
    url: process.env.URL + '/podshipniki/nemetalicheskie',
    images: [
      {
        url: '/image/nemetalicheskie/pro05.jpg',
        width: 1200,
        height: 630,
        alt: 'Неметаллические подшипники скольжения HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/nemetalicheskie',
  },
};

const Nemetalicheskie = () => {
  const title = products[4].name;
  const description = products[4].description;
  const image = products[4].img;

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
    material: 'Инженерные пластики и композиты',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Тип',
        value: 'Самосмазывающийся',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Химическая стойкость',
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
          materialsList={materialsList05}
        />
      </main>
    </>
  );
};

export default Nemetalicheskie;
