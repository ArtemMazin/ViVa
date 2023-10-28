import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg800-815.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-800/815"
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
          src="/image/pages/hmg800-815/hmg800-815.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-800/815"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-800/815</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Бронзово-свинцовый сплав HMG-800 — CuSb10Pb10, также доступен
            материал с низким содержанием свинца HMG-815 со сплавом CuSn10Pb5.
            Эти материалы имеют низкие коэффициенты трения, хорошую
            износостойкость и подходят для условий работы со смазкой. Для
            улучшения смазывающих свойств в качестве опции могут быть
            предусмотрены масляные канавки.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Спеченный сплав бронзы и алюминия со свинцом обеспечивает хорошие
            самосмазывающиеся свойства, хорошую усталостную прочность и
            противозадирные свойства.
          </Ptag>
          <Ptag tag="p">
            2. Стальная основа обеспечивает механическую прочность подшипника.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg800-815/hmg800-815structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-800/815"
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
        <Ptag tag="p">
          Эти материалы подходят для использования при средней нагрузке и в
          условиях средней и низкой скорости. Хорошая заливка сплава
          обеспечивает пылезащиту подшипников. Подшипники можно использовать в
          запыленной среде и там, где существуют защитные оболочки. Типичные
          области применения включают шатуны, ролики ходовой части, проушины
          штока гидроцилиндра, погрузочно-разгрузочную технику,
          сельскохозяйственную технику, лесную технику и так далее. Эти два
          материала содержат свинец, использование которого для некоторых
          специальных деталей ограничено в соответствии с соответствующими
          законами и правилами.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
