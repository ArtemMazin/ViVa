import Image from 'next/image';
import React from 'react';
import styles from './hmg090.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import TableTop from './TableTop';
import TableBottom from './TableBottom';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-090"
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
          src="/image/pages/hmg090/hmg090.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-090"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-090</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Это тонкостенная свёртная втулка. Внутренняя насечка удерживает
            смазку для образования смазочной пленки во время начальной обкатки.
            Внутренний диаметр втулки может быть обработан после сборки.
            Бронзовый сплав обеспечивает хорошую коррозионную стойкость и
            теплопроводность. Он подходит для средних и низких нагрузок и низких
            скоростей, поэтому рекомендуется периодически смазывать.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            Это втулка из бронзового сплава CuSn8. Он имеет хорошие нагрузочные
            характеристики и хорошую износостойкость. Это экономичная
            конструкция с насечкой, которая удерживает масло для образования
            смазочной пленки во время первоначальной обкатки.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg090/hmg090structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-090"
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
        <Ptag>
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
