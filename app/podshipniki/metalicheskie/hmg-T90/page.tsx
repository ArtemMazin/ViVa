import Image from 'next/image';
import React from 'react';
import styles from './hmgT90.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';
import TableBottom from './TableBottom';
import TableTop from './TableTop';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Бронзовая втулка HMG-T90 | CuSn8 сплав | Сквозная перфорация',
  description:
    'Тонкостенная втулка HMG-T90 из бронзового сплава CuSn8. Сквозная перфорация для равномерной смазки, высокая теплопроводность, коррозионная стойкость. Оптимальна для работы при низких нагрузках.',
  openGraph: {
    title:
      'Втулка HMG-T90 | Бронзовый сплав CuSn8 | Перфорированная конструкция',
    description:
      'Свёртная втулка HMG-T90: сквозные отверстия для смазки, превосходная износостойкость, эффективный теплоотвод. Техподдержка, быстрая доставка.',
    url: process.env.URL + '/podshipniki/metalicheskie/hmg-t90',
    images: [
      {
        url: '/image/metalicheskie/hmg-T90.jpg',
        width: 1200,
        height: 630,
        alt: 'Перфорированная бронзовая втулка HMG-T90',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalicheskie/hmg-t90',
  },
  keywords: 'HMG-T90, бронзовая втулка, CuSn8 сплав, сквозная перфорация',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-T90',
    image: `${process.env.URL}/image/pages/hmgT90/hmgT90.jpg`,
    description:
      'Тонкостенная свёртная втулка из бронзового сплава CuSn8 со сквозной перфорацией для смазки. Высокая теплопроводность и коррозионная стойкость.',
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
    material: 'Бронза CuSn8',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Тип',
        value: 'Свёртная втулка',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Сквозная перфорация для смазки',
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
          currentLink="Подшипники HMG-T90"
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
            src="/image/pages/hmgT90/hmgT90.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-T90"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-T90</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Это тонкостенная свёртная втулка. Она представляет собой
              экономичное решение, когда жесткие допуски не являются
              критическими. Внутренняя насечка удерживает смазку для
              формирования смазочной пленки в начальный приработочный период
              эксплуатации. Внутренний диаметр втулки можно дополнительно
              обрабатывать после сборки узла. Бронзовый сплав обеспечивает
              высокую коррозионную стойкость и эффективный отвод тепла благодаря
              высокой теплопроводности. Данная втулка оптимальна для применения
              при средних и низких нагрузках, а также низких скоростях вращения,
              при этом рекомендуется периодическая смазка.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              Это свёртная втулка из бронзового сплава CuSn8. Она рассчитана на
              средние нагрузки и обладает превосходной износостойкостью. Данная
              экономичная конструкция имеет внутреннюю рельефную поверхность с
              насечками для удержания смазочного материала и формирования
              эффективной смазочной пленки в начальный приработочный период
              эксплуатации.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmgT90/hmgT90structure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-T90"
          />
        </section>
        <section>
          <div className={styles.scroll}>
            <TableTop />
          </div>

          <div className={styles.scroll}>
            <TableBottom />
          </div>
        </section>
        <section>
          <Htag tag="h2" border="left">
            Типичные области применения
          </Htag>
          <Ptag margin="bottom">
            Типичные области применения данного материала включают подъемное
            оборудование, строительную технику, автомобильную промышленность,
            тракторы, грузовики, сельскохозяйственные и горнодобывающие машины.
            Доступная продукция включает втулки, фланцевые втулки и упорные
            шайбы.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
