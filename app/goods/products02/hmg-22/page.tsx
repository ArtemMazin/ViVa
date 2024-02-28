import Image from 'next/image';
import React from 'react';
import styles from './hmg22.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-22"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products02`,
            name: 'Металлополимерные подшипники, требующие смазки',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg22/hmg22.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-22"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-22</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Подходит для эксплуатации со смазкой. Перед сборкой рекомендуется
            смазать детали консистентной смазкой. HMG-22M представляет собой
            материал ПВДФ толщиной 0,1-0,2 мм без масляных отверстий, после
            сборки поддается механической обработке.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Толщина ПВДФ 0,20–0,35 мм обеспечивает хорошую износостойкость и
            более низкие коэффициенты трения даже при плохих условиях смазки.
          </Ptag>
          <Ptag>
            2. Толщина спеченной бронзы 0,20-0,35 мм обеспечивает прочное
            механическое соединение и отличную теплопроводность.
          </Ptag>
          <Ptag>
            3. Низкоуглеродистая сталь, обеспечивает механическую прочность и
            теплопроводность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg22/hmg22structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-22"
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
        <Ptag>
          Материал обладает хорошей износостойкостью и подходит для применений
          со средними и высокими нагрузками в условиях ударной нагрузки и
          пыльной среды. Перед сборкой необходима предварительная смазка. Этот
          материал применяется в оси коммерческого транспорта, тормозной
          системе, системе подвески, воздушных компрессорах, гидравлических
          поршневых насосах, двигателях, а также в сельскохозяйственной технике,
          лесной технике и погрузочно-разгрузочных машинах.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
