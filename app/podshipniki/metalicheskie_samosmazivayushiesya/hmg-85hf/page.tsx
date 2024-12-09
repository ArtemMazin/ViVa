import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg85HF.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Подшипник HMG-85HF | Fe-Cu матрица для высоких скоростей', // 60 символов
  description:
    'Самосмазывающийся подшипник HMG-85HF: железо-медная матрица с твердыми смазочными компонентами и масляными порами. Эффективный теплоотвод, низкое трение, для высокоскоростных применений.', // 165 символов
  openGraph: {
    title: 'Подшипник HMG-85HF | Высокая теплопроводность | Эффективная смазка',
    description:
      'Самосмазывающийся подшипник HMG-85HF: Fe-Cu матрица с твердыми смазочными добавками и масляными резервуарами. Идеален для высоких скоростей. Доступна термообработанная версия HMG-85HFH для высоких нагрузок.',
    url:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-85hf',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/hmg-85hf.jpg',
        width: 1200,
        height: 630,
        alt: 'Высокоскоростной подшипник HMG-85HF с Fe-Cu матрицей',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-85hf',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-85HF, Fe-Cu сплав, твердые смазочные компоненты, высокоскоростной подшипник, масляные поры',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-85HF',
    image: `${process.env.URL}/image/pages/hmg85HF/hmg85HF.jpg`,
    description:
      'Самосмазывающийся подшипник с Fe-Cu матрицей, твердыми смазочными компонентами и масляными порами. Доступна термообработанная версия HMG-85HFH.',
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
    material: 'Железо-медный сплав',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Тип',
        value: 'Самосмазывающийся подшипник',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Высокая теплопроводность',
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
          currentLink="Подшипники HMG-85HF"
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
            src="/image/pages/hmg85HF/hmg85HF.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-85HF"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-85HF</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Стальная основа с добавлением медного сплава придает подшипникам
              необходимую механическую прочность. Диспергированные в материале
              твердые смазочные компоненты способствуют образованию смазочной
              пленки в процессе эксплуатации, а содержащееся внутри масло
              дополнительно снижает коэффициент трения. Рекомендуется
              использовать данный материал в условиях низких нагрузок и
              средних-высоких скоростей вращения. HMG-85HFH представляет собой
              термообработанный композит, обладающий повышенной ударной
              вязкостью, что делает его пригодным для применения при средних и
              высоких нагрузках, в запыленной среде с ударными воздействиями и
              граничными режимами смазки.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Твердые смазочные компоненты, равномерно диспергированные в
              порошковом сплаве, способствуют образованию смазочной пленки,
              улучшая характеристики трения и повышая износостойкость.
            </Ptag>
            <Ptag>
              2. Правильно ориентированные поры в материале удерживают внутри
              масло для смазки.
            </Ptag>
            <Ptag>
              3. Сплав на основе железа и меди придает необходимую механическую
              прочность и обеспечивает эффективный отвод тепла благодаря высокой
              теплопроводности.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg85HF/hmg85HFstructure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-85HF"
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
            Высокопроизводительные подшипники из данного сплава Fe-Cu оптимальны
            для применения в условиях высоких нагрузок и низких скоростей
            вращения, таких как стрелы экскаваторов, проушины штоков
            гидроцилиндров, роботизированная техника, машины для литья пластмасс
            под давлением, машины для литья металлов под давлением и другое
            металлообрабатывающее оборудование.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
