import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg650.module.css';
import Image from 'next/image';
import React from 'react';
import TableTop from './TableTop';
import TableBottom from './TableBottom';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Бронзографитовый подшипник HMG-650 | Для литьевых машин и портового оборудования', // 79 символов
  description:
    'Самосмазывающийся подшипник HMG-650 с ориентированными смазочными компонентами в бронзовой матрице. Высокая грузоподъемность, надежная работа при частых пусках-остановках. Для тяжелой промышленности.', // 190 символов
  openGraph: {
    title:
      'Подшипник HMG-650 | Бронзографитовый композит | Для тяжелых нагрузок',
    description:
      'Самосмазывающийся подшипник HMG-650: бронзовая основа с твердыми смазочными компонентами. Идеален для литьевых машин, портового оборудования и горнодобывающей техники. Высокая ударопрочность.',
    url:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/hmg-650.jpg',
        width: 1200,
        height: 630,
        alt: 'Бронзографитовый подшипник HMG-650 для тяжелых условий',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-650, бронзографитовый подшипник, высокая грузоподъемность, литьевые машины, портовое оборудование',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-650',
    image: `${process.env.URL}/image/pages/hmg650/hmg650.jpg`,
    description:
      'Самосмазывающийся бронзографитовый подшипник с ориентированными смазочными компонентами. Высокая грузоподъемность и надежность при частых пусках-остановках.',
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
    material: 'Бронзографитовый композит',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Тип',
        value: 'Самосмазывающийся подшипник',
      },
      {
        '@type': 'PropertyValue',
        name: 'Применение',
        value: 'Литьевые машины, портовое оборудование',
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
          currentLink="Подшипники HMG-650"
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
            src="/image/pages/hmg650/hmg650.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-650"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-650</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Бронзовый сплав придает подшипнику необходимую механическую
              прочность и высокую грузоподъемность, а диспергированные в
              материале твердые смазочные компоненты обеспечивают непрерывный
              источник смазки для формирования надежной смазочной пленки. Данный
              композит оптимален для применения в условиях средних и высоких
              нагрузок, а также в случаях, когда требуются частые пуски и
              остановки оборудования. Типичные области применения включают
              кулачковые механизмы и стяжные шпильки машин для литья пластмасс
              под давлением, портовое оборудование, затворы плотин и
              горнодобывающую технику.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Начальная смазочная пленка обеспечивает смазку для снижения
              коэффициента трения на первичном этапе эксплуатации.
            </Ptag>
            <Ptag>
              2. Твердые смазочные компоненты ориентированы в направлении
              движения подшипника для формирования эффективной смазочной пленки,
              улучшающей характеристики трения и износостойкости в процессе
              работы.
            </Ptag>
            <Ptag>
              3. Бронзовый сплав придает необходимую механическую прочность, а
              также повышает ударную вязкость и коррозионную стойкость
              материала.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg650/hmg650structure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-650"
          />
        </section>
        <section>
          <div className={styles.scroll}>
            <TableTop />
          </div>
        </section>
        <section>
          <div className={styles.scroll}>
            <TableBottom />
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
