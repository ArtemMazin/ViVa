import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg600.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-600"
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
          src="/image/pages/hmg600/hmg600.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-600"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-600</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Литой бронзовый сплав представляет собой высокопрочный материал,
            обладающий высокой ударной вязкостью, коррозионной стойкостью и
            износостойкостью, что делает его оптимальным для применения в
            условиях средних и высоких рабочих нагрузок. Высокоточная
            механическая обработка обеспечивает идеальное соответствие допусков
            сопрягаемым деталям. Масляные канавки, отверстия для смазки могут
            быть спроектированы в соответствии с различными условиями
            эксплуатации. Размеры подшипников могут быть изготовлены по
            индивидуальному заказу для обеспечения максимально точного
            соответствия существующим сопрягаемым деталям заказчика.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            Литые бронзовые подшипники обеспечивают идеальное самосмазывающееся
            решение как с технической, так и с экономической точки зрения.
            Данный материал обладает высокой нагрузочной способностью и
            превосходной коррозионной стойкостью. Доступны различные сплавы для
            удовлетворения разнообразных требований применения.
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
        <Ptag>
          Типичные области применения включают портовое оборудование,
          строительную технику, машины для литья пластмасс под давлением, оси и
          погрузочно-разгрузочное оборудование. Данный материал отличается
          высокой грузоподъемностью и превосходной коррозионной стойкостью.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
