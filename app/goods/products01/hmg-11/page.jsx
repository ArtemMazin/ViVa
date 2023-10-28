import Image from 'next/image';
import React from 'react';
import styles from './hmg11.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-11"
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
          src="/image/pages/hmg11/hmg11.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-11"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-11</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Материал имеет те же характеристики, что и стандартные полимерные
            композитные подшипники со стальной опорой. Кроме того, бронзовая
            задняя часть обеспечивает лучшую коррозионную стойкость и
            теплопроводность. Поэтому его легче собирать и он имеет лучшую
            магнитную устойчивость.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Толщина смеси ПТФЭ/волокна 0,01–0,03 мм обеспечивает превосходную
            первоначальную переносимую пленку, которая эффективно покрывает
            сопрягаемые поверхности подшипникового узла, обеспечивая
            самосмазывающиеся свойства.
          </Ptag>
          <Ptag tag="p">
            2. Толщина порошка спеченной бронзы 0,20-0,35 мм обеспечивает
            прочное механическое соединение и отличную теплопроводность.
          </Ptag>
          <Ptag tag="p">
            3. Бронзовая основа обеспечивает механическую прочность и
            корозионную стойкость.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg11/hmg11structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, (max-width: 1096px) 10vw, 35vw"
          priority={false}
          alt="Структура материала HMG-11"
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
          Материал подходит для изготовления дверных петель, петель капота,
          петель багажника, стеклоочистителей, сцепных устройств прицепа,
          подъемных машин, морских лебедок, судовых цепей, рукавов вала плотины,
          печей, текстильных машин, металлургического оборудования и проушин для
          штоков цилиндров.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
