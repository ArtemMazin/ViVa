import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg260.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-260"
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
          src="/image/pages/hmg260/hmg260.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-260"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-260</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            По сравнению с традиционными подшипниками из закаленной стали,
            специально обработанный материал повышает твердость и снижает
            коэффициенты трения. Благодаря хорошей износостойкости материала,
            испытаниям на выносливость при высоких нагрузках, а также надлежащим
            условиям герметизации и смазки, комплексные характеристики этого
            материала даже лучше, чем у бронзового сплава с твердыми смазочными
            материалами. Он подходит для работы с высокими нагрузками и низкой
            скоростью, где существуют условия работы в условиях ударной и
            запыленной среды.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Основанная на легированной стали, поверхность подшипника специально
            обработана для улучшения износостойкости и противозадирных свойств
            материала, а также значительно снижает коэффициенты трения
            подшипников. Специальная узорчатая поверхность увеличивает срок
            смазки.
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
          Этот тип подшипников разработан для замены традиционных подшипников из
          закаленной стали, чтобы уменьшить стоимость технического обслуживания.
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
