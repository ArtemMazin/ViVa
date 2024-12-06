import Link from 'next/link';
import styles from './podshipniki.module.css';
import Image from 'next/image';
import { products } from '@/utils/products';
import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Подшипники HMG | Металлополимерные и самосмазывающиеся | ВиВа Групп',
  description:
    'Все виды подшипников HMG: бронзовые, полимерные, стальные для различных условий эксплуатации. Профессиональная техническая поддержка, оперативная доставка по России. Оптимальные инженерные решения для любых промышленных задач.',
  openGraph: {
    title:
      'Подшипники HMG | Все виды и типы | Решения для промышленности | ВиВа Групп',
    description:
      'Широкий выбор подшипников HMG: металлополимерные, самосмазывающиеся, стальные. Официальная гарантия производителя, профессиональный подбор под ваши задачи, быстрая доставка по всей России. Техническая поддержка на всех этапах.',
    url: process.env.URL + '/podshipniki',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Разновидности подшипников HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    'подшипники HMG, виды подшипников, металлополимерные подшипники, самосмазывающиеся подшипники',
};

export default function Podshipniki() {
  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        image: `${process.env.URL}${product.img}`,
        url: `${process.env.URL}${product.href}`,
        description: product.description,
        brand: {
          '@type': 'Brand',
          name: 'HMG',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'ВиВа Групп',
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={productListJsonLd} />
      <main className={`container ${styles.podshipniki}`}>
        <BreadCrumbs
          currentLink="Подшипники"
          links={[{ href: process.env.URL, name: 'Главнaя' }]}
        />
        <Htag tag="h1" border="left" className={styles.main_title}>
          Наша продукция
        </Htag>
        <ul className={styles.items}>
          {products.map(({ name, img, href }) => {
            return (
              <li key={name} className={styles.item}>
                <div className={styles.row}>
                  <Link className={styles.imageContainer} href={href}>
                    <Image
                      src={img}
                      fill
                      sizes="(max-width: 520px) 60vw, (max-width: 768px) 50vw, (max-width: 1280px) 40vw, 100vw"
                      alt={name}
                      className={styles.image}
                      priority={true}
                    />
                  </Link>
                  <div className={styles.titleContainer}>
                    <Link href={href} className={styles.link}>
                      <Htag tag="h2" className={styles.title}>
                        {name}
                      </Htag>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>{' '}
    </>
  );
}
