import Image from 'next/image';
import React from 'react';
import styles from './hmg20.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Подшипник HMG-20 | Металополимерный для тяжелых нагрузок | ВиВа Групп',
  description:
    'Металополимерный подшипник HMG-20: система удержания смазки, высокая грузоподъемность, низкое трение. Для низкоскоростных механизмов. Доставка по России.',
  openGraph: {
    title:
      'Подшипник HMG-20 | Металополимерный с насечкой для смазки | ВиВа Групп',
    description:
      'Металополимерный подшипник HMG-20: специальная насечка для смазки, высокая износостойкость, работа при больших нагрузках. Техническая поддержка.',
    url: process.env.URL + '/podshipniki/metalopolimernye/hmg-20',
    images: [
      {
        url: '/image/metalopolimernye/hmg-20.jpg',
        width: 1200,
        height: 630,
        alt: 'Металополимерный подшипник HMG-20',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalopolimernye/hmg-20',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-20, металополимерный подшипник, подшипник с насечкой для смазки, подшипник для тяжелых нагрузок',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-20',
    image: `${process.env.URL}/image/pages/hmg20/hmg20.jpg`,
    description:
      'Металополимерный подшипник с системой удержания смазки. Состоит из полиоксиметилена, спеченной бронзы и стальной основы. Для тяжелых нагрузок и низких скоростей.',
    brand: {
      '@type': 'Brand',
      name: 'HMG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      url: process.env.URL,
    },
    category: 'Металлополимерные подшипники',
    material: 'Полиоксиметилен, бронза, сталь',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Насечка для удержания смазки',
      },
      {
        '@type': 'PropertyValue',
        name: 'Применение',
        value: 'Тяжелые нагрузки, низкие скорости',
      },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'ВиВа Групп',
      },
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <main className={`${styles.section} container`}>
        <BreadCrumbs
          currentLink="Подшипники HMG-20"
          links={[
            { href: process.env.URL, name: 'Главнaя' },
            { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
            {
              href: `${process.env.URL}/podshipniki/metalopolimernye`,
              name: 'Металлополимерные подшипники, требующие смазки',
            },
          ]}
        />
        <section className={styles.flex}>
          <Image
            src="/image/pages/hmg20/hmg20.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-20"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-20</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Данный подшипник оптимизирован для работы со смазкой. Перед
              сборкой рекомендуется тщательно нанести консистентную смазку на
              все трущиеся поверхности. Внутренняя насечка специально
              предназначена для удержания смазочного материала в зоне трения.
              Периодическое смазывание во время эксплуатации существенно
              продлевает срок службы подшипника. Сочетание низкого коэффициента
              трения, высокой износостойкости и высокой грузоподъемности делает
              этот подшипник идеальным решением для механизмов с низкоскоростным
              вращательным и возвратно-поступательным движением. HMG-20M
              изготовлен из полиоксиметилена увеличенной толщины, что позволяет
              проводить его последующую механическую обработку.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Толщина полиоксиметилена 0,30~0,50 мм обеспечивает хорошую
              износостойкость. На поверхности этого подшипника имеется насечка
              из круглых углублений, которые должны быть заполнены смазкой при
              сборке подшипника.
            </Ptag>
            <Ptag>
              2. Спеченная бронза толщиной 0,20-0,35 мм обеспечивает прочное
              механическое сцепление и отличную теплопроводность.
            </Ptag>
            <Ptag>
              3. Низкоуглеродистая сталь обеспечивает механическую прочность и
              теплопроводность.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg20/hmg20structure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-20"
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
          <Ptag margin="bottom">
            Данный материал обладает высокой износостойкостью, что делает его
            пригодным для применения в условиях средних и высоких нагрузок,
            ударных воздействий и запыленной среды. Перед сборкой обязательно
            требуется нанесение смазки. Этот материал широко используется в
            коммерческом транспорте (оси, тормозные системы, подвески),
            сельскохозяйственной и лесозаготовительной технике, а также в
            погрузочно-разгрузочном оборудовании. Он может заменять традиционные
            стальные или бронзовые втулки, обеспечивая более высокие
            эксплуатационные характеристики.
          </Ptag>
        </section>
      </main>{' '}
    </>
  );
};

export default page;
