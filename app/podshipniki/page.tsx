import Link from 'next/link';
import styles from './podshipniki.module.css';
import Image from 'next/image';
import { products } from '@/utils/products';
import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Подшипники скольжения HMG | Металлополимерные и самосмазывающиеся | ВиВа Групп',
  description:
    'Официальный поставщик подшипников скольжения HMG в России. Широкий выбор: бронзовые, полимерные, металлические подшипники. Техническая поддержка, быстрая доставка по России, оптимальные цены. Решения для любых промышленных задач.',
  openGraph: {
    title:
      'Подшипники скольжения HMG | Металлополимерные и самосмазывающиеся | ВиВа Групп',
    description:
      'Подшипники скольжения HMG от официального поставщика: бронзовые, полимерные, металлические. Высокое качество, техническая поддержка, индивидуальный подход. Доставка по России, выгодные условия сотрудничества.',
    url: process.env.URL + '/podshipniki',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Подшипники скольжения HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/podshipniki',
  },
};

export default function Podshipniki() {
  return (
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
    </main>
  );
}
