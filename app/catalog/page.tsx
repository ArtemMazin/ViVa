import { Metadata } from 'next';
import styles from './catalog.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  title:
    'Каталог подшипников HMG | Стандартные и специальные решения | ВиВа Групп',
  description:
    'Полный каталог подшипников HMG: цилиндрические и фланцевые втулки, упорные кольца для различных условий эксплуатации. Склад в Подмосковье, профессиональная техподдержка, изготовление нестандартных размеров по чертежам заказчика.',
  openGraph: {
    title: 'Каталог подшипников HMG | Все типоразмеры в наличии | ВиВа Групп',
    description:
      'Каталог подшипников HMG: широкий выбор стандартных размеров на складе, изготовление специальных решений по чертежам. Профессиональная техническая поддержка, оперативная доставка по всей России.',
    url: process.env.URL + '/catalog',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Каталог стандартных и специальных подшипников HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/catalog',
  },
  keywords:
    'подшипники HMG, каталог подшипников, цилиндрические втулки, фланцевые втулки',
};

export default function CatalogPage() {
  const catalogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Каталог подшипников скольжения',
    description:
      'Полный каталог подшипников HMG: цилиндрические и фланцевые втулки, упорные кольца для различных условий эксплуатации',
    url: `${process.env.URL}/catalog`,
    image: `${process.env.URL}/image/metalicheskie_samosmazivayushiesya/pro03.jpg`,
    publisher: {
      '@type': 'Organization',
      name: 'ВиВа Групп',
    },
  };

  const documentJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'Каталог подшипников скольжения',
    encodingFormat: 'application/pdf',
    contentSize: '24.3 MB',
    url: `${process.env.URL}/download/catalog.pdf`,
  };

  return (
    <>
      <JsonLd data={catalogJsonLd} />
      <JsonLd data={documentJsonLd} />
      <main className={`container ${styles.catalog}`}>
        <BreadCrumbs
          currentLink="Каталог"
          links={[{ href: process.env.URL || '/', name: 'Главная' }]}
        />

        <Htag tag="h1" border="left" className={styles.main_title}>
          Каталог подшипников скольжения
        </Htag>
        <Ptag margin="bottom">
          Наша компания предлагает широкий ассортимент подшипников скольжения
          для различных отраслей промышленности. В нашем каталоге вы найдете как
          стандартные повсеместно используемые изделия: цилиндрические втулки,
          фланцевые втулки, аксиальные (упорные) кольца, ленту и многое другое,
          так и специальные детали, изготовленные по индивидуальным чертежам и
          техническим условиям заказчика.
        </Ptag>
        <Ptag margin="bottom">
          Для удобства клиентов мы поддерживаем склад готовой продукции в
          Подмосковье, где всегда есть в наличии подшипники стандартных
          размеров. Это позволяет оперативно выполнять заказы и обеспечивать
          бесперебойные поставки.
        </Ptag>
        <Ptag>
          Ознакомиться с каталогами размеров конкретных материалов подшипников
          Вы можете здесь:
        </Ptag>
        <a
          href="/download/catalog.pdf"
          download
          className={styles.downloadLink}
        >
          Скачать полный каталог подшипников скольжения (pdf 24,3 МБ)
        </a>
        <Ptag margin="bottom">
          Подшипники скольжения имеют широчайший спектр применения: от пищевой,
          химической промышленности и медицинского оборудования, до автомобилей,
          летательных аппаратов и судостроения. В зависимости от сферы
          использования, материал, из которого выполнены подшипники, должен
          обладать определенными свойствами и техническими характеристиками.
        </Ptag>
        <Ptag margin="bottom">
          Наши специалисты помогут подобрать оптимальное решение для вашего
          проекта с учетом всех требований и условий эксплуатации. Свяжитесь с
          нами, и мы предложим наиболее подходящие варианты подшипников
          скольжения.
        </Ptag>
      </main>
    </>
  );
}
