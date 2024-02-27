import Image from 'next/image';
import React from 'react';
import styles from './hmg20.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-20"
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
          src="/image/pages/hmg20/hmg20.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-20"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-20</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Подходит для работы со смазкой. Перед сборкой рекомендуется смазать
            детали консистентной смазкой. Масляное отверстие может удерживать
            смазку с оптимизированной матрицей. Смазка во время эксплуатации
            помогает продлить срок службы подшипника. Низкие коэффициенты
            трения, хорошая износостойкость и надежная несущая способность
            подшипника обеспечивают подходящее применение при низкоскоростном
            вращении и колебательных движениях. HMG-20М — материал с толщиной
            ПОМ 0,2-0,35 мм без масляных отложений на поверхности, после сборки
            поддается механической обработке.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Толщина ПОМ 0,30–0,50 мм обеспечивает хорошую износостойкость. На
            этой опорной поверхности имеется узор из круглых углублений, которые
            при сборке подшипника следует заполнить смазкой.
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
          src="/image/pages/hmg20/hmg20structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-20"
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
          Материал обладает хорошей износостойкостью и подходит для средних и
          высоких нагрузок в условиях работы. ударных нагрузок и запыленной
          среды. Перед сборкой необходима предварительная смазка. Этот материал
          применяется в оси коммерческого транспорта, тормозной системе, системе
          подвески, сельскохозяйственной технике, лесной технике и
          погрузочно-разгрузочной технике. Его можно использовать для замены
          некоторых традиционных стальных или бронзовых гильз.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
