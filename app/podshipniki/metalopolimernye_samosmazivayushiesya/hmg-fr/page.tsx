import Image from 'next/image';
import React from 'react';
import styles from './hmgFR.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Подшипник HMG-FR | Сетчатая бронзовая основа | ВиВа Групп',
  description:
    'Металополимерный подшипник HMG-FR с бронзовой сетчатой основой и ПТФЭ покрытием. Легкий монтаж, возможность калибровки, высокая защита от коррозии. Для работы во влажных условиях.',
  openGraph: {
    title: 'Подшипник HMG-FR | Сетчатый антикоррозийный | ВиВа Групп',
    description:
      'Металополимерный подшипник HMG-FR: бронзовая сетка с ПТФЭ покрытием, простая калибровка, высокая коррозионная стойкость. Техническая поддержка.',
    url:
      process.env.URL +
      '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-fr',
    images: [
      {
        url: '/image/metalopolimernye_samosmazivayushiesya/hmg-fr.jpg',
        width: 1200,
        height: 630,
        alt: 'Сетчатый подшипник HMG-FR с ПТФЭ покрытием',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL +
      '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-fr',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-FR, сетчатый подшипник, бронзовая сетка, ПТФЭ покрытие, антикоррозийный подшипник',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-FR',
    image: `${process.env.URL}/image/pages/hmgFR/hmgFR.jpg`,
    description:
      'Металополимерный подшипник с сетчатой бронзовой основой и ПТФЭ покрытием. Легкий монтаж, возможность калибровки после установки.',
    brand: {
      '@type': 'Brand',
      name: 'HMG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      url: process.env.URL,
    },
    category: 'Металлополимерные самосмазывающиеся подшипники',
    material: 'ПТФЭ, бронзовая сетка',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Легкий вес, самосмазывание, возможность калибровки',
      },
      {
        '@type': 'PropertyValue',
        name: 'Варианты исполнения',
        value: 'HMG-FR (бронзовая сетка), HMG-FRS (нержавеющая сетка)',
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
          currentLink="Подшипники HMG-FR"
          links={[
            { href: process.env.URL, name: 'Главнaя' },
            { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
            {
              href: `${process.env.URL}/podshipniki/metalopolimernye_samosmazivayushiesya`,
              name: 'Металлополимерные самосмазывающиеся подшипники',
            },
          ]}
        />
        <section className={styles.flex}>
          <Image
            src="/image/pages/hmgFR/hmgFR.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-FR"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-FR</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Металлическая сетчатая основа обеспечивает износостойкость и
              самосмазывающие свойства благодаря своей легкости, что делает ее
              подходящей для ручной и автоматической сборки. Конечная точность
              подгонки и крутящий момент могут быть отрегулированы калибровкой
              после установки втулки. Доступны два материала: HMG-FR - это
              материал с бронзовой сетчатой основой, а HMG-FRS - материал с
              нержавеющей стальной сетчатой основой. У последнего лучше
              сопротивление коррозии.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Лента из композита ПТФЭ обладает функцией самосмазывания.
            </Ptag>
            <Ptag>
              2. Металлическая сетчатая основа обеспечивает механическую
              прочность и теплопроводность.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmgFR/hmgFRstructure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-FR"
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
            Этот материал подходит для применения в петлях дверей, клапанах,
            офисной технике и текстильной промышленности. Он легкий и обладает
            рядом преимуществ, включая износостойкость, хорошую теплопроводность
            и самосмазывающие свойства.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
