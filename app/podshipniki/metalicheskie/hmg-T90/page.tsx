import Image from 'next/image';
import React from 'react';
import styles from './hmgT90.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import TableBottom from './TableBottom';
import TableTop from './TableTop';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Бронзовый подшипник HMG-T90 для низких нагрузок и скоростей | ВиВа Групп',
  description:
    'Купите высококачественный бронзовый подшипник HMG-T90 от ВиВа Групп. Бронзовый сплав обладает высокой коррозионной стойкостью, эффективно отводит тепло и оптимален для работы при средних и низких нагрузках, а также низких оборотах. Рекомендуется периодическое смазывание.',
  openGraph: {
    title:
      'Бронзовый подшипник HMG-T90 для низких нагрузок и скоростей | ВиВа Групп',
    description:
      'Купите высококачественный бронзовый подшипник HMG-T90 от ВиВа Групп. Бронзовый сплав обладает высокой коррозионной стойкостью, эффективно отводит тепло и оптимален для работы при средних и низких нагрузках, а также низких оборотах. Рекомендуется периодическое смазывание.',
    url: process.env.URL + '/podshipniki/metalicheskie/hmg-t90',
    images: [
      {
        url: '/image/metalicheskie/hmg-T90.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalicheskie/hmg-t90',
  },
};

const page = () => {
  return (
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
            Это тонкостенная свёртная втулка. Она представляет собой экономичное
            решение, когда жесткие допуски не являются критическими. Внутренняя
            насечка удерживает смазку для формирования смазочной пленки в
            начальный приработочный период эксплуатации. Внутренний диаметр
            втулки можно дополнительно обрабатывать после сборки узла. Бронзовый
            сплав обеспечивает высокую коррозионную стойкость и эффективный
            отвод тепла благодаря высокой теплопроводности. Данная втулка
            оптимальна для применения при средних и низких нагрузках, а также
            низких скоростях вращения, при этом рекомендуется периодическая
            смазка.
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
          Доступная продукция включает втулки, фланцевые втулки и упорные шайбы.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
