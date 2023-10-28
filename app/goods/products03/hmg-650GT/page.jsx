import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg650GT.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-650GT"
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
          src="/image/pages/hmg650GT/hmg650GT.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-650GT"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-650GT</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Бронзовый сплав обеспечивает механическую прочность и несущую
            способность подшипника, а также снижает стоимость материала. Твердые
            смазочные материалы обеспечивают непрерывный источник смазки для
            создания надежной системы смазки. Он подходит для условий
            эксплуатации со средней и высокой нагрузкой и там, где требуется
            частый перезапуск.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Твердые смазочные материалы, расположенные в соответствии с
            направлением движения подшипника для создания смазочной пленки,
            улучшающей коэффициенты трения и износостойкость.
          </Ptag>
          <Ptag tag="p">
            2. Бронзовый сплав обеспечивает механическую прочность, улучшает
            ударопрочность и коррозионную стойкость.
          </Ptag>
          <Ptag tag="p">
            3. Стальная основа снижает стоимость материала и повышает
            механическую прочность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg650GT/hmg650GTstructure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-650GT"
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
          Материал широко используется в машинах для литья пластмасс, портовом
          оборудовании, горнодобывающих машинах, направляющих. втулка для
          пресс-формы и так далее. Он подходит для применений в условиях ударной
          нагрузки и пыльной среды, а также при частом перезапуске.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
