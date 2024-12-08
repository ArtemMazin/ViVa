import Image from 'next/image';
import React from 'react';
import styles from './hmg11.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Подшипник HMG-11 | Бронзовая основа | ПТФЭ покрытие | ВиВа Групп',
  description:
    'Металополимерный подшипник HMG-11: бронзовая основа для высокой теплопроводности, ПТФЭ покрытие для низкого трения. Коррозионная стойкость. Доставка по России.',
  openGraph: {
    title: 'Подшипник HMG-11 | Антикоррозийный с ПТФЭ | ВиВа Групп',
    description:
      'Металополимерный подшипник HMG-11: бронзовая основа с ПТФЭ покрытием, высокая теплопроводность, устойчивость к магнитным полям. Техническая поддержка.',
    url:
      process.env.URL +
      '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-11',
    images: [
      {
        url: '/image/metalopolimernye_samosmazivayushiesya/hmg-11.jpg',
        width: 1200,
        height: 630,
        alt: 'Металополимерный подшипник HMG-11 на бронзовой основе',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical:
      process.env.URL +
      '/podshipniki/metalopolimernye_samosmazivayushiesya/hmg-11',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'HMG-11, металополимерный подшипник, ПТФЭ покрытие, бронзовая основа, антикоррозийный подшипник',
};

const page = () => {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HMG-11',
    image: `${process.env.URL}/image/pages/hmg11/hmg11.jpg`,
    description:
      'Металополимерный подшипник на бронзовой основе с ПТФЭ покрытием. Высокая теплопроводность, коррозионная стойкость, немагнитные свойства.',
    brand: {
      '@type': 'Brand',
      name: 'HMG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      url: process.env.URL,
    },
    category: 'Металлополимерные самосмазывающиеся подшипники',
    material: 'ПТФЭ, бронза',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Особенности',
        value: 'Коррозионная стойкость, немагнитные свойства',
      },
      {
        '@type': 'PropertyValue',
        name: 'Толщина ПТФЭ слоя',
        value: '0.01-0.03 мм',
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
          currentLink="Подшипники HMG-11"
          links={[
            { href: process.env.URL, name: 'Главнaя' },
            { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
            {
              href: `${process.env.URL}/podshipniki/metalopolimernye_samosmazivayushiesya`,
              name: 'Металлополимерные самосмазывающиеся подшипники',
            },
          ]}
        />
        <section className={styles.flex}>
          <Image
            src="/image/pages/hmg11/hmg11.jpg"
            width={600}
            height={450}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
            priority={true}
            alt="Подшипники HMG-11"
            className={styles.image}
          />
          <div>
            <Htag tag="h1">HMG-11</Htag>
            <Htag tag="h2" border="left">
              Описание
            </Htag>
            <Ptag>
              Данный материал обладает схожими свойствами со стандартными
              металлополимерными композитными подшипниками на стальной основе.
              Однако использование бронзовой основы вместо стали придает ему
              дополнительные преимущества. Бронза обеспечивает более высокую
              коррозионную стойкость и лучшую теплопроводность по сравнению со
              сталью. Благодаря этому подшипники с бронзовой основой проще в
              монтаже и демонтаже, так как не склонны к коррозионному
              растрескиванию и не нагреваются так сильно при работе. Кроме того,
              бронза не является ферромагнитным материалом, что делает такие
              подшипники устойчивыми к воздействию магнитных полей и позволяет
              применять их в соответствующем оборудовании.
            </Ptag>
          </div>
        </section>
        <section className={styles.flex}>
          <div>
            <Htag tag="h2" border="left">
              Структура
            </Htag>
            <Ptag>
              1. Толщина смеси политетрафторэтилена (ПТФЭ) с волокнистыми
              наполнителями составляет 0,01-0,03 мм и обеспечивает формирование
              превосходной исходной переносимой пленки, которая эффективно
              покрывает сопрягаемые поверхности подшипникового узла, придавая
              ему самосмазывающиеся свойства.
            </Ptag>
            <Ptag>
              2. Слой спеченного бронзового порошка толщиной 0,20-0,35 мм
              обеспечивает прочное механическое сцепление с основой и отличную
              теплопроводность.
            </Ptag>
            <Ptag>
              3. Бронзовая основа обеспечивает механическую прочность и
              корозионную стойкость.
            </Ptag>
            <Ptag margin="bottom">
              Такая трехслойная конструкция позволяет объединить преимущества
              различных материалов. Тонкий полимерный слой ПТФЭ обладает низким
              коэффициентом трения и выполняет роль сухой смазки. Бронзовый
              порошковый слой способствует формированию смазочной пленки и
              отводу тепла. А стальная основа придает подшипнику жесткость и
              способность выдерживать высокие нагрузки.
            </Ptag>
          </div>

          <Image
            src="/image/pages/hmg11/hmg11structure.png"
            width={300}
            height={240}
            sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, (max-width: 1096px) 10vw, 35vw"
            priority={false}
            alt="Структура материала HMG-11"
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
            Данный материал идеально подходит для применения в следующих
            областях: изготовление дверных петель, петель капота и багажника
            автомобилей, механизмов стеклоочистителей, сцепных устройств для
            прицепов, подъемных механизмов, морских лебедок, судовых цепей,
            уплотнительных рукавов для валов плотин, оборудования для обжига в
            печах, текстильных станков, металлургического оборудования, а также
            проушин для штоков гидроцилиндров. Благодаря своим уникальным
            свойствам этот композитный материал обеспечивает надежную работу
            узлов трения в широком диапазоне нагрузок и температур. Он сочетает
            в себе высокую прочность и износостойкость, низкий коэффициент
            трения, стойкость к коррозии и воздействию химических сред. Кроме
            того, его можно использовать в условиях ограниченной смазки или
            вовсе без нее. Все эти качества делают его незаменимым для тяжелых
            промышленных применений, где требуется длительный срок службы
            деталей.
          </Ptag>
        </section>
      </main>
    </>
  );
};

export default page;
