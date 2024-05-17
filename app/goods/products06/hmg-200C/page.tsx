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
          <Ptag>
            Это наиболее экономичное решение для подшипников скольжения
            подобного типа. Оно оптимально для применения при высоких нагрузках
            и низких скоростях вращения в условиях ударных нагрузок и запыленной
            среды. Помимо начальной смазки, необходима периодическая подача
            смазки, поскольку недостаточная смазка может привести к
            преждевременному выходу подшипников из строя. Не рекомендуется
            эксплуатация в сухих условиях, при использовании данного типа
            подшипников необходимо предусмотреть надлежащую систему смазки.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            Подшипники из закаленной стали S45C. Термическая обработка повышает
            износостойкость и ударную вязкость материала. Масляные канавки и
            отверстия доступны в зависимости от требований. Конструкция масляных
            канавок и отверстий обеспечивает равномерное распределение масла или
            смазки по рабочей поверхности подшипника для улучшения смазочных
            свойств. Рабочая поверхность подшипника может быть покрыта или
            содержать твердые смазочные материалы для дополнительного повышения
            смазывающей способности.
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
        <Ptag>
          Типичные области применения данного материала включают портовое
          оборудование, лесную технику, строительную технику, оси грузовиков,
          погрузочно-разгрузочное оборудование, а также проушины штоков
          гидроцилиндров и соединительные подшипниковые узлы.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
