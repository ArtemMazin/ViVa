import Image from 'next/image';
import React from 'react';
import styles from './hmg80.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Подшипник HMG-80 | ПЭЭК/ПТФЭ | Температура от -150°C до +250°C | ВиВа Групп',
  description:
    'Металополимерный подшипник HMG-80: ПЭЭК/ПТФЭ покрытие, широкий температурный диапазон, высокие значения PV. Система удержания смазки. Доставка по России.',
  openGraph: {
    title:
      'Подшипник HMG-80 | Высокотемпературный металополимерный | ВиВа Групп',
    description:
      'Металополимерный подшипник HMG-80: работа при температурах -150°C до +250°C, высокая химстойкость, эффективная система смазки. Техническая поддержка.',
    url: process.env.URL + '/podshipniki/metalopolimernye/hmg-80',
    images: [
      {
        url: '/image/metalopolimernye/hmg-80.jpg',
        width: 1200,
        height: 630,
        alt: 'Высокотемпературный подшипник HMG-80 с ПЭЭК/ПТФЭ покрытием',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki/metalopolimernye/hmg-80',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-80, металополимерный подшипник, ПЭЭК/ПТФЭ покрытие, высокотемпературный подшипник',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-80',
    image: `${process.env.URL}/image/pages/hmg80/hmg80.jpg`,
    description:
      'Металополимерный подшипник с ПЭЭК/ПТФЭ покрытием для температур от -150°C до +250°C. Система удержания смазки, высокая химстойкость.',
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
    material: 'ПЭЭК/ПТФЭ, бронза, сталь',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Температурный диапазон',
        value: '-150°C до +250°C',
      },
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Система удержания смазки, высокая химстойкость',
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
          currentLink="Подшипники HMG-80"
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
            src="/image/pages/hmg80/hmg80.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-80"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-80</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Данный материал оптимален для применения в условиях граничной
              смазки. Перед сборкой настоятельно рекомендуется тщательно нанести
              консистентную смазку на все трущиеся поверхности деталей.
              Внутренняя насечка позволяет удерживать смазочный материал с
              оптимизированной структурой и задерживать возможные поступающие
              загрязнения во время эксплуатации. Периодическое смазывание в
              процессе работы существенно продлевает срок службы подшипника.
              Широкий диапазон рабочих температур от -150°C до +250°C и высокая
              химическая стойкость обеспечивают применимость этого подшипника в
              условиях средних и высоких нагрузок. HMG-80M представляет собой
              композитный материал с тонким слоем ПЭЭК/ПТФЭ толщиной 0,1-0,2 мм
              без насечки на поверхности, который можно дополнительно
              обрабатывать после сборки узла.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Слой полимерного композита ПЭЭК/ПТФЭ толщиной 0,20-0,35 мм
              придает высокую износостойкость. На поверхности подшипника имеется
              рельефный рисунок из круглых углублений, которые необходимо
              заполнить консистентной смазкой при сборке.
            </Ptag>
            <Ptag>
              2. Спеченный бронзовый слой толщиной 0,20-0,35 мм обеспечивает
              прочное сцепление с основой и эффективный отвод тепла благодаря
              высокой теплопроводности.
            </Ptag>
            <Ptag>
              3. Низкоуглеродистая стальная основа придает материалу требуемую
              механическую прочность и теплопроводность.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg80/hmg80structure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
            priority={true}
            alt="Структура материала HMG-80"
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
            Данный композитный материал имеет широкий диапазон рабочих
            температур и может эксплуатироваться в условиях высоких значений PV
            (произведения давления на скорость). Он находит применение в
            гидравлических моторах, насосах, системах общей топливной рампы
            дизельных двигателей, а также в тормозных системах тяжелых
            грузовиков.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
