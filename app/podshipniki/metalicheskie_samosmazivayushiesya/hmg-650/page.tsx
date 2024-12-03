import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg650.module.css';
import Image from 'next/image';
import React from 'react';
import TableTop from './TableTop';
import TableBottom from './TableBottom';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Бронзографитовые самосмазывающиеся подшипники HMG-650 | ВиВа Групп',
  description:
    'Купите высококачественные самосмазывающиеся бронзографитовые подшипники HMG-650 от ВиВа Групп. Бронзовый сплав придает подшипнику необходимую механическую прочность и высокую грузоподъемность, а диспергированные твердые смазочные компоненты обеспечивают непрерывный источник смазки.',
  openGraph: {
    title: 'Бронзографитовые самосмазывающиеся подшипники HMG-650 | ВиВа Групп',
    description:
      'Купите высококачественный самосмазывающийся бронзовый подшипник HMG-650 от ВиВа Групп. Бронзовый сплав придает подшипнику необходимую механическую прочность и высокую грузоподъемность, а диспергированные твердые смазочные компоненты обеспечивают непрерывный источник смазки.',
    url:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/hmg-650.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya/hmg-650',
  },
};

const page = () => {
  return (
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
            прочность и высокую грузоподъемность, а диспергированные в материале
            твердые смазочные компоненты обеспечивают непрерывный источник
            смазки для формирования надежной смазочной пленки. Данный композит
            оптимален для применения в условиях средних и высоких нагрузок, а
            также в случаях, когда требуются частые пуски и остановки
            оборудования. Типичные области применения включают кулачковые
            механизмы и стяжные шпильки машин для литья пластмасс под давлением,
            портовое оборудование, затворы плотин и горнодобывающую технику.
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
            2. Твердые смазочные компоненты ориентированы в направлении движения
            подшипника для формирования эффективной смазочной пленки, улучшающей
            характеристики трения и износостойкости в процессе работы.
          </Ptag>
          <Ptag>
            3. Бронзовый сплав придает необходимую механическую прочность, а
            также повышает ударную вязкость и коррозионную стойкость материала.
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
  );
};

export default page;
