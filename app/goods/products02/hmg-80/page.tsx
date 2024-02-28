import Image from 'next/image';
import React from 'react';
import styles from './hmg80.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-80"
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
          src="/image/pages/hmg80/hmg80.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-80"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-80</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Подходит для эксплуатации со смазкой. Перед сборкой рекомендуется
            смазать детали консистентной смазкой. Масляное месторождение может
            удерживать смазку с оптимизированной матрицей и удерживать возможные
            входящие загрязнения во время работы. Смазка во время эксплуатации
            помогает продлить срок службы подшипника. Широкий диапазон рабочих
            температур от -150°C до +250°C и надежная химическая стойкость
            подшипника обеспечивают подходящее применение в условиях средних и
            высоких нагрузок. HMG-80M представляет собой материал с толщиной
            PEEK/ПТФЭ 0,1-0,2 мм без масляных отложений на поверхности, после
            сборки он поддается механической обработке.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Толщина PEEK/ПТФЭ 0,20–0,35 мм обеспечивает хорошую
            износостойкость. На этой опорной поверхности имеется узор из круглых
            углублений, которые при сборке подшипника следует заполнить смазкой.
          </Ptag>
          <Ptag>
            2. Спеченная бронза толщиной 0,20-0,35 мм обеспечивает прочное
            механическое соединение и отличную теплопроводность.
          </Ptag>
          <Ptag>
            3. Низкоуглеродистая сталь, обеспечивает механическую прочность и
            теплопроводность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg80/hmg80structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-80"
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
          Материал имеет широкий диапазон рабочих температур и может
          использоваться в условиях высоких значений PV. Оно используется в
          гидравлических двигателях, насосах, системе Common Rail дизельных
          двигателей и тормозных системах тяжелых грузовиков.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
