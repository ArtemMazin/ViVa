import Link from 'next/link';
import styles from './goods.module.css';
import Image from 'next/image';
import { products } from '@/utils/products';
import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Продукция компании ООО "ВиВа Групп"',
  description: 'Продукция компании ООО "ВиВа Групп"',
};

export default function Goods() {
  return (
    <main className={`container ${styles.goods}`}>
      <BreadCrumbs
        currentLink="Товары"
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
