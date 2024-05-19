import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg600.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Бронзовый подшипник HMG-600 для средних и высоких нагрузок | ВиВа Групп',
  description:
    'Купите высококачественный бронзовый подшипник HMG-600 от ВиВа Групп. Литой бронзовый сплав - высокопрочный материал с высокой ударной вязкостью, коррозионной стойкостью и износостойкостью, что делает его оптимальным для применения в условиях средних и высоких рабочих нагрузок.',
  openGraph: {
    title:
      'Бронзовый подшипник HMG-600 для средних и высоких нагрузок | ВиВа Групп',
    description:
      'Купите высококачественный бронзовый подшипник HMG-600 от ВиВа Групп. Литой бронзовый сплав - высокопрочный материал с высокой ударной вязкостью, коррозионной стойкостью и износостойкостью, что делает его оптимальным для применения в условиях средних и высоких рабочих нагрузок.',
    url: process.env.URL + '/podshipniki/metalicheskie_podshipniki/hmg-600',
    images: [
      {
        url: '/image/metalicheskie_podshipniki/hmg-600.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-600"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/metalicheskie_podshipniki`,
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
        <Ptag margin="bottom">
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
