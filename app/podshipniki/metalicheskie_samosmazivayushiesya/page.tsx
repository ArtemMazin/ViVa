import React from 'react';
import { materialsList03 } from '@/utils/materialsLists';
import { products } from '@/utils/products';
import Products from '@/components/Products/Products';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Металлические самосмазывающиеся подшипники HMG | Работа без смазки | ВиВа Групп',
  description:
    'Металлические самосмазывающиеся подшипники HMG от официального поставщика. Работа без смазки, низкий коэффициент трения, высокая износостойкость. Идеальны для тяжелых условий эксплуатации. Техническая поддержка, доставка по России.',
  openGraph: {
    title:
      'Металлические самосмазывающиеся подшипники HMG | Работа без смазки | ВиВа Групп',
    description:
      'Металлические самосмазывающиеся подшипники HMG: эффективная работа без смазки, длительный срок службы, низкое трение. Широкий выбор размеров, техническая поддержка, оперативная доставка. Решения для любых промышленных задач.',
    url: process.env.URL + '/podshipniki/metalicheskie_samosmazivayushiesya',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Металлические самосмазывающиеся подшипники HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL + '/podshipniki/metalicheskie_samosmazivayushiesya',
  },
};

const Metalicheskie_samosmazivayushiesya_podshipniki = () => {
  const title = products[2].name;
  const description = products[2].description;
  const image = products[2].img;

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
        materialsList={materialsList03}
      />
    </main>
  );
};

export default Metalicheskie_samosmazivayushiesya_podshipniki;
