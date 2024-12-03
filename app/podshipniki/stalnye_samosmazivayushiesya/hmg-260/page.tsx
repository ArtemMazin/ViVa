import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg260.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Стальной самосмазывающийся подшипник HMG-260 | ВиВа Групп',
  description:
    'Купите высококачественный стальной самосмазывающийся подшипник HMG-260 от ВиВа Групп. Специальная обработка материала повышает твердость и снижает коэффициенты трения. Оптимален для применения при высоких нагрузках, низких скоростях вращения в условиях ударных нагрузок и запыленной среды.',
  openGraph: {
    title:
      'Стальной самосмазывающийся подшипник HMG-260 с повышенной твердостью | ВиВа Групп',
    description:
      'Купите высококачественный стальной самосмазывающийся подшипник HMG-260 от ВиВа Групп. Специальная обработка материала повышает твердость и снижает коэффициенты трения. Оптимален для применения при высоких нагрузках, низких скоростях вращения в условиях ударных нагрузок и запыленной среды.',
    url: process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya/hmg-260',
    images: [
      {
        url: '/image/stalnye_samosmazivayushiesya/hmg-260.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical:
      process.env.URL + '/podshipniki/stalnye_samosmazivayushiesya/hmg-260',
  },
};

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-260"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/stalnye_samosmazivayushiesya`,
            name: 'Высокопроизводительные стальные самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg260/hmg260.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-260"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-260</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            По сравнению с традиционными закаленными стальными подшипниками,
            специальная обработка материала повышает твердость и снижает
            коэффициенты трения. Благодаря превосходной износостойкости
            материала и при условии надлежащей герметизации и смазки,
            комплексные эксплуатационные характеристики данного материала даже
            превосходят показатели бронзовых сплавов с твердыми смазочными
            добавками. Он оптимален для применения при высоких нагрузках и
            низких скоростях вращения в условиях ударных нагрузок и запыленной
            среды.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            На основе легированной стали рабочая поверхность подшипника проходит
            специальную обработку, повышающую износостойкость и антизадирные
            свойства материала, а также значительно снижающую коэффициенты
            трения подшипников. Специальный рельефный рисунок рабочей
            поверхности увеличивает интервалы между смазками.
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
          Данный тип подшипников был разработан для замены традиционных
          закаленных стальных подшипников с целью сокращения эксплуатационных
          расходов. Типичные области применения этого материала включают
          портовое оборудование, лесную технику, строительную технику, оси
          грузовиков, погрузочно-разгрузочное оборудование, а также проушины
          штоков гидроцилиндров и соединительные подшипниковые узлы.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
