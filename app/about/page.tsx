import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import styles from './about.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  title: 'ВиВа Групп | 10 лет инноваций в подшипниках скольжения | О компании',
  description:
    'Официальный поставщик HMG в России и СНГ. Инновационные решения, широкий склад, техподдержка. Замена традиционных подшипников на современные материалы.',
  openGraph: {
    title: 'ВиВа Групп | Эксперт в подшипниках скольжения | О компании',
    description:
      'Ведущий поставщик HMG с 2013 года. Инновационные материалы, индивидуальные решения, собственный склад в Подмосковье. Работаем по всей России.',
    url: process.env.URL + '/about',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'ВиВа Групп - инновационные подшипники скольжения',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/about',
  },
  keywords:
    'ВиВа Групп, подшипники скольжения, HMG поставщик, инновационные материалы',
};

export default function AboutPage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ВиВа Групп',
    url: process.env.URL,
    logo: `${process.env.URL}/image/metalicheskie_samosmazivayushiesya/pro03.jpg`,
    description: 'Официальный поставщик HMG в России и СНГ с 2013 года',
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7(495)926-07-74',
      contactType: 'sales',
      availableLanguage: 'Russian',
    },
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'О компании ВиВа Групп',
    image: `${process.env.URL}/image/timeLine.png`,
    datePublished: '2024-12-06',
    description:
      'ООО «ВиВа Групп» представляет в России, странах СНГ и Восточной Европе одного из ведущих мировых производителей подшипников скольжения',
    publisher: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.URL}/image/metalicheskie_samosmazivayushiesya/pro03.jpg`,
      },
    },
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={articleJsonLd} />
      <main className={`container ${styles.about}`}>
        <BreadCrumbs
          currentLink="О компании"
          links={[{ href: process.env.URL || '/', name: 'Главная' }]}
        />
        <Htag tag="h1" border="left" className={styles.main_title}>
          О компании
        </Htag>
        <Ptag margin="bottom">
          ООО «ВиВа Групп» представляет в России, странах СНГ и Восточной Европе
          одного из ведущих мировых производителей подшипников скольжения. Офис
          компании расположен в Москве. Клиентами компании становятся
          предприятия и организации, для которых высокое качество, гибкая
          ценовая политика и оперативность поставок являются необходимыми
          составляющими партнерства. За 10 лет работы партнерами компании стали
          более двухсот компаний.
        </Ptag>
        <div className={styles.image}>
          <Image
            src="/image/timeLine.png"
            alt="История развития компании"
            fill
            sizes="(max-width: 520px) 30vw, (max-width: 768px) 50vw, 100vw"
            priority={false}
            className={styles.timeLine}
          />
        </div>
        <Ptag margin="bottom">
          Компания поставляет стандартные подшипники скольжения широкого спектра
          применения (цилиндрические втулки, фланцевые втулки, упорные кольца,
          ленты и т.д.), а также специальные изделия на заказ в соответствии с
          чертежами и техническими условиями заказчика. Для бесперебойного
          снабжения организован склад в Подмосковье с постоянно пополняемым
          запасом изделий стандартных размеров.
        </Ptag>
        <Ptag margin="bottom">
          Компания постоянно работает над заменой латунных и бронзовых
          отечественных подшипников скольжения изделиями из инновационных
          материалов: металлофторопласта, металлополимера, бронзографита и др.
          Испытания проводятся в реальных производственных условиях, их
          результаты подтверждают снижение издержек, увеличение срока службы и
          повышение производительности оборудования при использовании новых
          подшипников.
        </Ptag>
        <Ptag margin="bottom">
          Высочайшее качество, инновационность решений и клиентоориентированный
          подход - вот незыблемые принципы, которыми руководствуется ООО «ВиВа
          Групп» в своей деятельности. Миссия компании - быть надежным
          партнером, предлагающим передовые разработки в области подшипников
          скольжения, способствующие повышению производительности и
          долговечности промышленного оборудования.
        </Ptag>
        <Ptag margin="bottom">
          Стремление к совершенству продукции, использование прогрессивных
          материалов и технологий лежат в основе инновационного развития ООО
          «ВиВа Групп». Компания ценит взаимовыгодные и доверительные отношения
          со своими клиентами и партнерами, обеспечивая оперативное реагирование
          на их запросы и потребности. Ответственный подход к ведению бизнеса,
          забота об экологии и следование высоким этическим стандартам -
          неотъемлемые составляющие корпоративной культуры предприятия. Для нас
          важны не только экономические показатели, но и репутация надежного
          поставщика инновационных решений высочайшего качества.
        </Ptag>
      </main>
    </>
  );
}
