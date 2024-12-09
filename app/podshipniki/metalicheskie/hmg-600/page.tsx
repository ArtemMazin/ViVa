import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg600.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Литой бронзовый подшипник HMG-600 | Максимальная прочность | ВиВа Групп',
  description:
    'Литой подшипник HMG-600: высокая ударная вязкость, прецизионная механическая обработка, оптимизированные масляные канавки. Идеальное решение для тяжелых условий эксплуатации. Изготовление по индивидуальным размерам, гарантированное качество.',
  openGraph: {
    title:
      'Литой подшипник HMG-600 | Высокопрочная бронза | Индивидуальные размеры',
    description:
      'Высокопрочный бронзовый подшипник HMG-600: превосходная износостойкость, стойкость к коррозии и высоким нагрузкам. Изготовление по индивидуальным чертежам заказчика, профессиональная техническая поддержка 24/7. Доставка по всей России.',
    url: process.env.URL + '/podshipniki/metalicheskie/hmg-600',
    images: [
      {
        url: '/image/metalicheskie/hmg-600.jpg',
        width: 1200,
        height: 630,
        alt: 'Литой бронзовый подшипник HMG-600 повышенной прочности',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalicheskie/hmg-600',
  },
  keywords:
    'HMG-600, литой бронзовый подшипник, высокая прочность, индивидуальные размеры',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-600',
    image: `${process.env.URL}/image/pages/hmg600/hmg600.jpg`,
    description:
      'Литой бронзовый подшипник с высокой ударной вязкостью, коррозионной стойкостью и износостойкостью. Оптимален для средних и высоких нагрузок.',
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
    material: 'Литая бронза',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Тип',
        value: 'Литой подшипник',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Высокая ударная вязкость',
      },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'ВиВа Групп',
      },
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <main className={`${styles.section} container`}>
        <BreadCrumbs
          currentLink="Подшипники HMG-600"
          links={[
            { href: process.env.URL, name: 'Главнaя' },
            { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
            {
              href: `${process.env.URL}/podshipniki/metalicheskie`,
              name: 'Металлические подшипники, требующие смазки',
            },
          ]}
        />
        <section className={styles.flex}>
          <Image
            src="/image/pages/hmg600/hmg600.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-600"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-600</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Литой бронзовый сплав представляет собой высокопрочный материал,
              обладающий высокой ударной вязкостью, коррозионной стойкостью и
              износостойкостью, что делает его оптимальным для применения в
              условиях средних и высоких рабочих нагрузок. Высокоточная
              механическая обработка обеспечивает идеальное соответствие
              допусков сопрягаемым деталям. Масляные канавки, отверстия для
              смазки могут быть спроектированы в соответствии с различными
              условиями эксплуатации. Размеры подшипников могут быть изготовлены
              по индивидуальному заказу для обеспечения максимально точного
              соответствия существующим сопрягаемым деталям заказчика.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              Литые бронзовые подшипники обеспечивают идеальное
              самосмазывающееся решение как с технической, так и с экономической
              точки зрения. Данный материал обладает высокой нагрузочной
              способностью и превосходной коррозионной стойкостью. Доступны
              различные сплавы для удовлетворения разнообразных требований
              применения.
            </Ptag>
          </div>
        </section>
        <section>
          <div className={styles.scroll}>
            <Table />
          </div>
        </section>
        <section>
          <Htag tag="h2" border="left">
            Типичные области применения
          </Htag>
          <Ptag margin="bottom">
            Типичные области применения включают портовое оборудование,
            строительную технику, машины для литья пластмасс под давлением, оси
            и погрузочно-разгрузочное оборудование. Данный материал отличается
            высокой грузоподъемностью и превосходной коррозионной стойкостью.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
