import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg650GT.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Биметаллический подшипник HMG-650GT | Работа при 300°C', // 57 символов
  description:
    'Экономичный биметаллический подшипник HMG-650GT: стальная основа с бронзовым слоем, ориентированные смазочные компоненты. Высокая прочность, термостойкость 300°C, надежная работа при частых пусках.', // 180 символов
  openGraph: {
    title: 'Подшипник HMG-650GT | Сталь-бронза | Термостойкость до 300°C',
    description:
      'Биметаллический подшипник HMG-650GT: стальная основа с бронзовым слоем для снижения стоимости. Ориентированные смазочные компоненты, высокая механическая прочность, работа при температуре до 300°C.',
    url:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650gt',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/hmg-650gt.jpg',
        width: 1200,
        height: 630,
        alt: 'Термостойкий биметаллический подшипник HMG-650GT',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650gt',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-650GT, биметаллический подшипник, термостойкость 300°C, сталь-бронза, экономичное решение',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-650GT',
    image: `${process.env.URL}/image/pages/hmg650GT/hmg650GT.jpg`,
    description:
      'Биметаллический подшипник со стальной основой и бронзовым слоем. Термостойкость до 300°C, ориентированные смазочные компоненты для надежной работы.',
    brand: {
      '@type': 'Brand',
      name: 'HMG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      url: process.env.URL,
    },
    category: 'Металлические самосмазывающиеся подшипники',
    material: 'Биметаллический композит (сталь-бронза)',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Термостойкость',
        value: '300°C',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Ориентированные смазочные компоненты',
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
          currentLink="Подшипники HMG-650GT"
          links={[
            { href: process.env.URL, name: 'Главнaя' },
            { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
            {
              href: `${process.env.URL}/podshipniki/metalicheskie_samosmazivayushiesya`,
              name: 'Металлические самосмазывающиеся подшипники',
            },
          ]}
        />
        <section className={styles.flex}>
          <Image
            src="/image/pages/hmg650GT/hmg650GT.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-650GT"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-650GT</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Бронзовый сплав придает подшипнику необходимую механическую
              прочность и высокую грузоподъемность, а также позволяет снизить
              стоимость материала. Диспергированные в материале твердые
              смазочные компоненты обеспечивают непрерывный источник смазки для
              формирования надежной смазочной пленки. Данный композит оптимален
              для применения в условиях средних и высоких нагрузок, а также в
              случаях, когда требуются частые пуски и остановки оборудования.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Твердые смазочные компоненты ориентированы в направлении
              движения подшипника для формирования эффективной смазочной пленки,
              улучшающей характеристики трения и износостойкости.
            </Ptag>
            <Ptag>
              2. Бронзовый сплав придает необходимую механическую прочность, а
              также повышает ударную вязкость и коррозионную стойкость
              материала.
            </Ptag>
            <Ptag>
              3. Стальная основа позволяет снизить стоимость материала при
              сохранении высокой механической прочности.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg650GT/hmg650GTstructure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-650GT"
          />
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
            Данный композитный материал широко применяется в машинах для литья
            пластмасс под давлением, портовом оборудовании, горнодобывающей
            технике, направляющих втулках для пресс-форм и т.д. Он оптимален для
            эксплуатации в условиях ударных нагрузок, запыленной среды, а также
            при наличии частых пусков и остановок оборудования.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
