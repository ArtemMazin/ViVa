import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg200C.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-200C"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products06`,
            name: 'Высокопроизводительные стальные самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg200C/hmg200C.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-200C"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-200C</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Это наиболее экономичное решение подшипников скольжения. Он подходит
            для работы с высокими нагрузками и низкой скоростью, где существуют
            условия работы в условиях ударной и запыленной среды. В дополнение к
            первоначальной смазке необходима периодическая смазка, поскольку
            неудовлетворительные условия смазки могут привести к короткому сроку
            службы подшипников. Не рекомендуется использовать подшипники в сухом
            состоянии. При использовании подшипников такого типа необходимо
            учитывать наличие надлежащей системы смазки.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Подшипники из закаленной стали S45C. Термическая обработка повышает
            износостойкость и ударопрочность материала. Масляные канавки и
            отложения доступны в зависимости от требований. Смазочные канавки и
            рисунок отложений обеспечивают равномерное распределение масла или
            смазки по поверхности подшипника, что улучшает смазочные
            характеристики. В сочетании с технологией самосмазывания поверхность
            подшипника может быть покрыта или залита твердой смазкой для
            улучшения ее смазочных характеристик.
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
          Типичные области применения этого материала включают портовую технику,
          лесную технику, строительное оборудование, оси грузовых автомобилей и
          погрузочно-разгрузочную технику, а также проушины штоков
          гидравлических цилиндров и соединительные подшипники.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
