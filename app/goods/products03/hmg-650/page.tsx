import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg650.module.css';
import Image from 'next/image';
import React from 'react';
import TableTop from './TableTop';
import TableBottom from './TableBottom';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-650"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products03`,
            name: 'Металлические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg650/hmg650.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-650"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-650</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Бронзовый сплав обеспечивает механическую прочность и несущую
            способность подшипника, а твердые смазочные материалы обеспечивают
            непрерывный источник смазки для создания надежной системы смазки. Он
            подходит для условий эксплуатации со средней и высокой нагрузкой и
            там, где требуется частый перезапуск. Типичные области применения
            включают коленно-рычажный механизм машин для литья пластмасс, тяги,
            портовое оборудование, ворота плотин и горнодобывающее оборудование.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Первоначальная смазочная пленка обеспечивает начальную смазку для
            уменьшения трения.
          </Ptag>
          <Ptag>
            2. Твердые смазочные материалы, ориентированные в соответствии с
            направлением движения подшипника, образуют смазочную пленку,
            улучшающую коэффициенты трения и износостойкость.
          </Ptag>
          <Ptag>
            3. Бронзовый сплав обеспечивает механическую прочность, улучшает
            ударопрочность и коррозионную стойкость.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg650/hmg650structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-650"
        />
      </section>
      <section>
        <div className={styles.scroll}>
          <TableTop />
        </div>
      </section>
      <section>
        <div className={styles.scroll}>
          <TableBottom />
        </div>
      </section>
    </main>
  );
};

export default page;
