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
            Данный материал оптимален для применения в условиях граничной
            смазки. Перед сборкой настоятельно рекомендуется тщательно нанести
            консистентную смазку на все трущиеся поверхности деталей. Внутренняя
            насечка позволяет удерживать смазочный материал с оптимизированной
            структурой и задерживать возможные поступающие загрязнения во время
            эксплуатации. Периодическое смазывание в процессе работы существенно
            продлевает срок службы подшипника. Широкий диапазон рабочих
            температур от -150°C до +250°C и высокая химическая стойкость
            обеспечивают применимость этого подшипника в условиях средних и
            высоких нагрузок. HMG-80M представляет собой композитный материал с
            тонким слоем ПЭЭК/ПТФЭ толщиной 0,1-0,2 мм без насечки на
            поверхности, который можно дополнительно обрабатывать после сборки
            узла.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Слой полимерного композита ПЭЭК/ПТФЭ толщиной 0,20-0,35 мм
            придает высокую износостойкость. На поверхности подшипника имеется
            рельефный рисунок из круглых углублений, которые необходимо
            заполнить консистентной смазкой при сборке.
          </Ptag>
          <Ptag>
            2. Спеченный бронзовый слой толщиной 0,20-0,35 мм обеспечивает
            прочное сцепление с основой и эффективный отвод тепла благодаря
            высокой теплопроводности.
          </Ptag>
          <Ptag>
            3. Низкоуглеродистая стальная основа придает материалу требуемую
            механическую прочность и теплопроводность.
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
          Данный композитный материал имеет широкий диапазон рабочих температур
          и может эксплуатироваться в условиях высоких значений PV (произведения
          давления на скорость). Он находит применение в гидравлических моторах,
          насосах, системах общей топливной рампы дизельных двигателей, а также
          в тормозных системах тяжелых грузовиков.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
