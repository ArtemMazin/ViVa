import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg650GT.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Самосмазывающийся бронзовый подшипник HMG-650GT для высоких температур | ВиВа Групп',
  description:
    'Купите высококачественный самосмазывающийся бронзовый подшипник HMG-650GT от ВиВа Групп. Специальный состав материала обеспечивает высокую термостойкость и возможность эксплуатации при повышенных температурах до 300°C.',
  openGraph: {
    title:
      'Самосмазывающийся бронзовый подшипник HMG-650GT для высоких температур | ВиВа Групп',
    description:
      'Купите высококачественный самосмазывающийся бронзовый подшипник HMG-650GT от ВиВа Групп. Специальный состав материала обеспечивает высокую термостойкость и возможность эксплуатации при повышенных температурах до 300°C.',
    url:
      process.env.URL +
      '/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki/hmg-650GT',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya_podshipniki/hmg-650GT.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-650GT"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/metalicheskie_samosmazivayushiesya_podshipniki`,
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
            стоимость материала. Диспергированные в материале твердые смазочные
            компоненты обеспечивают непрерывный источник смазки для формирования
            надежной смазочной пленки. Данный композит оптимален для применения
            в условиях средних и высоких нагрузок, а также в случаях, когда
            требуются частые пуски и остановки оборудования.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Твердые смазочные компоненты ориентированы в направлении движения
            подшипника для формирования эффективной смазочной пленки, улучшающей
            характеристики трения и износостойкости.
          </Ptag>
          <Ptag>
            2. Бронзовый сплав придает необходимую механическую прочность, а
            также повышает ударную вязкость и коррозионную стойкость материала.
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
  );
};

export default page;
