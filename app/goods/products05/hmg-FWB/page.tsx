import Image from 'next/image';
import React from 'react';
import styles from './hmgFWB.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-FWB"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products05`,
            name: 'Неметаллические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmgFWB/hmgFWB.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-FWB"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-FWB</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Несущий слой со специальным волокном и волокном ПТФЭ обладает
            хорошей износостойкостью. Подходит для использования в пыльных
            условиях с высокими нагрузками. ПТФЭ обеспечивает низкий коэффициент
            трения и функцию самосмазывания. Материал хорош для применения с
            низкой скоростью и высокой нагрузкой. Стекловолокно и эпоксидная
            смола обладают хорошей химической стойкостью.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Специальное волокно и слой волокна из ПТФЭ обеспечивают
            самосмазывающиеся свойства подшипников.
          </Ptag>
          <Ptag>
            2. Укрепите стекловолокно эпоксидной смолой, что обеспечивает
            механическую прочность и устойчивость к коррозии.
          </Ptag>
        </div>
        <Image
          src="/image/pages/hmgFWB/hmgFWBstructure.jpg"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-FWB"
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
          Этот тип материалов предназначен для применений, связанных с
          вращением, колебательным движением и необходимостью частого
          перезапуска. Они широко используются в сельскохозяйственной технике,
          подъемных машинах, погрузочно-разгрузочных машинах, строительной
          технике, судах, соединениях гидроцилиндров и проушинах штоков.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
