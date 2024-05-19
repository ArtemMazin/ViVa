import Link from 'next/link';
import styles from './podshipniki.module.css';
import Image from 'next/image';
import { products } from '@/utils/products';
import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: 'Подшипники скольжения HMG | ВиВа Групп',
  description:
    'Купите высококачественные подшипники скольжения HMG от надежного поставщика ВиВа Групп. Широкий ассортимент бронзовых, полимерных и металлических подшипников для различных отраслей промышленности.',
  openGraph: {
    title: 'Подшипники скольжения HMG | ВиВа Групп',
    description:
      'Купите высококачественные подшипники скольжения HMG от надежного поставщика ВиВа Групп. Широкий ассортимент бронзовых, полимерных и металлических подшипников для различных отраслей промышленности.',
    url: process.env.URL + '/podshipniki',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya_podshipniki/pro03.jpg',
        width: 1200,
        height: 630,
      },
    ],
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
