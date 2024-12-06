import React from 'react';
import Main from '@/components/Main/Main';
import styles from './page.module.css';
import JsonLd from '@/components/JsonLd/JsonLd';

export default function Home() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ВиВа Групп',
    url: process.env.URL,
    logo: `${process.env.URL}/image/nemetalicheskie/pro05.jpg`,
    description:
      'Поставщик высококачественных подшипников скольжения HMG: бронзовых, полимерных и металлических.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7(495)926-07-74',
      contactType: 'sales',
      availableLanguage: 'Russian',
    },
  };

  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Подшипники HMG',
          description:
            'Высококачественные подшипники скольжения с высокой износостойкостью и низким коэффициентом трения',
          brand: {
            '@type': 'Brand',
            name: 'HMG',
          },
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={productListJsonLd} />
      <main className={styles.main}>
        <Main />
      </main>
    </>
  );
}
