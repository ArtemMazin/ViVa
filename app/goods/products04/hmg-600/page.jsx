import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg600.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-600"
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
          src="/image/pages/hmg600/hmg600.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-600"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-600</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Литой бронзовый сплав представляет собой высокопрочный материал с
            хорошей ударопрочностью, коррозионной стойкостью и износостойкостью
            в условиях эксплуатации при средних и высоких нагрузках. Высокая
            точность обработки обеспечивает хорошее соответствие допусков
            аналогам. Масляные канавки и масляные отложения могут быть
            спроектированы в соответствии с различными условиями применения.
            Размеры подшипников могут быть изменены для лучшего соответствия
            существующим аналогам заказчика.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Подшипник из литого бронзового сплава представляет собой идеальное
            самосмазывающееся решение как с технической, так и с экономической
            точки зрения. Материал обладает высокой устойчивостью к нагрузкам и
            хорошей коррозионной стойкостью. Доступны различные сплавы в
            зависимости от различных требований применения.
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
        <Ptag tag="p">
          Типичные области применения этого материала включают портовое
          оборудование, строительное оборудование, оборудование для литья
          пластмасс под давлением, оси и погрузочно-разгрузочные машины. Он
          имеет высокую грузоподъемность и хорошую устойчивость к коррозии.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
