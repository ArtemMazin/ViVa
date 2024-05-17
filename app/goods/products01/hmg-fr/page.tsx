import Image from 'next/image';
import React from 'react';
import styles from './hmgFR.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-FR"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products01`,
            name: 'Металлополимерные самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmgFR/hmgFR.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-FR"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-FR</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Металлическая сетчатая основа обеспечивает износостойкость и
            самосмазывающие свойства благодаря своей легкости, что делает ее
            подходящей для ручной и автоматической сборки. Конечная точность
            подгонки и крутящий момент могут быть отрегулированы калибровкой
            после установки втулки. Доступны два материала: HMG-FR - это
            материал с бронзовой сетчатой основой, а HMG-FRS - материал с
            нержавеющей стальной сетчатой основой. У последнего лучше
            сопротивление коррозии.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Лента из композита ПТФЭ обладает функцией самосмазывания.
          </Ptag>
          <Ptag>
            2. Металлическая сетчатая основа обеспечивает механическую прочность
            и теплопроводность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmgFR/hmgFRstructure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-FR"
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
          Этот материал подходит для применения в петлях дверей, клапанах,
          офисной технике и текстильной промышленности. Он легкий и обладает
          рядом преимуществ, включая износостойкость, хорошую теплопроводность и
          самосмазывающие свойства.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
