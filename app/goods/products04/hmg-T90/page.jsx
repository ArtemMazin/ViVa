import Image from 'next/image';
import React from 'react';
import styles from './hmgT90.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import TableTop from './TableTop';
import TableBottom from './TableBottom';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-T90"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products04`,
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
          <Ptag tag="p">
            Это тонкостенная втулка с оберткой. Он подходит для экономичного
            решения, при этом требования к допускам не являются критическими.
            Отложения алмазного масла удерживают смазку для образования
            смазочной пленки во время начальной обкатки. Внутренний диаметр
            втулки может быть обработан после сборки. Бронзовый сплав
            обеспечивает хорошую коррозионную стойкость и теплопроводность. Он
            подходит для средних и низких нагрузок и низких скоростей;
            рекомендуется периодически смазывать легким маслом.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Это втулка из бронзового сплава CuSn8. Он имеет хорошие нагрузочные
            характеристики и хорошую износостойкость. Это экономичная
            конструкция с насечкой, которая удерживает масло для образования
            смазочной пленки во время первоначальной обкатки.
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
        <Ptag tag="p">
          Типичные области применения этого материала включают подъемное
          оборудование, строительное оборудование, автомобильную промышленность,
          тракторы, грузовики, сельскохозяйственную технику и горнодобывающую
          технику. Доступная продукция включает цилиндрические втулки, фланцевые
          втулки и упорные шайбы.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
