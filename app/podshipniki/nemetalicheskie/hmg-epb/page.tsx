import Image from 'next/image';
import React from 'react';
import styles from './hmgEPB.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Подшипник HMG-EPB | Инженерный пластик | FDA-совместимый | ВиВа Групп',
  description:
    'Полимерный подшипник HMG-EPB: специальный термопластик для высоких скоростей, работа под водой и при высоких температурах. Доставка по России.',
  openGraph: {
    title: 'Подшипник HMG-EPB | Термопластичный износостойкий | ВиВа Групп',
    description:
      'Полимерный подшипник HMG-EPB: инженерный пластик со специальными добавками, одобрен FDA, работа в агрессивных средах. Техническая поддержка.',
    url: process.env.URL + '/podshipniki/nemetalicheskie/hmg-epb',
    images: [
      {
        url: '/image/nemetalicheskie/hmg-epb.jpg',
        width: 1200,
        height: 630,
        alt: 'Полимерный подшипник HMG-EPB из инженерного пластика',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/nemetalicheskie/hmg-epb',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-EPB, полимерный подшипник, FDA-совместимый подшипник, термопластичный подшипник',
};

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-EPB"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/nemetalicheskie`,
            name: 'Неметаллические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmgEPB/hmgEPB.png"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-EPB"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-EPB</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            HMG-EPB – материал из инженерного пластика, создан на основе
            высокопроизводительных инженерных полимеров с применением
            специальных технологий и добавок, обеспечивающих высокую
            износостойкость и самосмазывающиеся свойства. Данные материалы
            широко применяются в автомобильной промышленности, а также в
            условиях высоких скоростей, под водой, при высоких температурах и в
            агрессивных коррозионных средах. Компания ВиВа Групп также
            предлагает решения, соответствующие нормативам FDA для использования
            в пищевой промышленности.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            Пластиковые подшипники HMG-EPB состоят из высокоэффективного
            конструкционного пластика. С помощью специальных добавок достигаются
            хорошая износостойкость и самосмазывающиеся свойства.
          </Ptag>
        </div>
      </section>

      <section>
        <Htag tag="h2" border="left">
          Типичные области применения
        </Htag>
        <Ptag margin="bottom">
          Этот тип материалов разработан для применения в условиях сухого трения
          и обеспечивает высокую химическую стойкость. Такие подшипники широко
          используются в офисном оборудовании, текстильных машинах,
          фитнес-тренажерах, пищевой промышленности, упаковочных линиях и
          автомобильной промышленности.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
