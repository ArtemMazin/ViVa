import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg85HF.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-85HF"
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
          src="/image/pages/hmg85HF/hmg85HF.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-85HF"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-85HF</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Основа из сплава Fe-Cu обеспечивает механическую прочность
            подшипников. Дисперсные твердые смазочные материалы могут
            образовывать смазочную пленку во время работы, а содержащееся внутри
            масло снижает коэффициент трения. Рекомендуется использовать в
            условиях низкой нагрузки и средней и высокой скорости. HMG85HFH —
            это термообработанный материал, который повышает ударопрочность
            подшипников и подходит для использования в условиях средних и
            высоких нагрузок, а также в запыленной среде с ударной нагрузкой и
            предельной нагрузкой.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Твердые смазочные материалы, диспергированные в порошке сплава
            для создания смазочной пленки, улучшающей коэффициенты трения и
            износостойкости.
          </Ptag>
          <Ptag tag="p">
            2. Масляные поры, правильно выровненные поры удерживают масло внутри
            материала.
          </Ptag>
          <Ptag tag="p">
            3. Сплав Fe-Cu обеспечивает механическую прочность и
            теплопроводность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg85HF/hmg85HFstructure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-85HF"
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
          Высокопроизводительный подшипник из сплава Fe-Cu подходит для
          применения в условиях высоких нагрузок и низких скоростей, включая
          стрелы экскаваторов, проушины штоков гидроцилиндров, роботов, машины
          для литья пластмасс под давлением, машины для литья под давлением и
          другие машины для обработки металла.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
