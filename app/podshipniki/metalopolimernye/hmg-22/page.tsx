import Image from 'next/image';
import React from 'react';
import styles from './hmg22.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Подшипник HMG-22 | PVDF покрытие | Высокая износостойкость | ВиВа Групп',
  description:
    'Металополимерный подшипник HMG-22: PVDF покрытие, работа при высоких нагрузках и в запыленной среде. Эффективен при граничной смазке. Доставка по России.',
  openGraph: {
    title: 'Подшипник HMG-22 | Металополимерный износостойкий | ВиВа Групп',
    description:
      'Металополимерный подшипник HMG-22: слой PVDF для максимальной износостойкости, работа при высоких нагрузках и ударных воздействиях. Техническая поддержка.',
    url: process.env.URL + '/podshipniki/metalopolimernye/hmg-22',
    images: [
      {
        url: '/image/metalopolimernye/hmg-22.jpg',
        width: 1200,
        height: 630,
        alt: 'Металополимерный подшипник HMG-22 с PVDF покрытием',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalopolimernye/hmg-22',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-22, металополимерный подшипник, PVDF покрытие, износостойкий подшипник',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-22',
    image: `${process.env.URL}/image/pages/hmg22/hmg22.jpg`,
    description:
      'Металополимерный подшипник с PVDF покрытием для работы при высоких нагрузках и в запыленной среде. Эффективен при граничной смазке.',
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
    material: 'PVDF, бронза, сталь',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Покрытие',
        value: 'Поливинилидендифторид (PVDF)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Толщина PVDF',
        value: '0.20-0.35 мм',
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
          currentLink="Подшипники HMG-22"
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
            src="/image/pages/hmg22/hmg22.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-22"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-22</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Данный материал оптимален для применения в условиях граничной
              смазки. Перед сборкой настоятельно рекомендуется тщательно нанести
              консистентную смазку на все трущиеся поверхности деталей. HMG-22M
              представляет собой композитный материал с тонким слоем
              поливинилидендифторида (PVDF) толщиной 0,1-0,2 мм, не содержащим
              насечки на поверхности. После сборки узла этот материал можно
              дополнительно обрабатывать механическим путем.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Слой поливинилидендифторида (PVDF) толщиной 0,20-0,35 мм
              придает материалу высокую износостойкость и обеспечивает низкий
              коэффициент трения даже при недостаточной смазке.
            </Ptag>
            <Ptag>
              2. Спеченный бронзовый слой толщиной 0,20-0,35 мм обеспечивает
              прочное сцепление с основой и отличную теплопроводность.
            </Ptag>
            <Ptag>
              3. Низкоуглеродистая стальная основа придает материалу необходимую
              механическую прочность и теплопроводность.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg22/hmg22structure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-22"
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
            Этот материал отличается высокой износостойкостью, что делает его
            пригодным для применения в условиях средних и высоких нагрузок,
            ударных воздействий и запыленной среды. Перед сборкой обязательно
            требуется нанесение смазочного материала. Данный композит широко
            используется в коммерческом транспорте (оси, тормозные системы,
            подвески), воздушных компрессорах, гидравлических поршневых насосах
            и двигателях, а также в сельскохозяйственной, лесозаготовительной
            технике и погрузочно-разгрузочном оборудовании.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
