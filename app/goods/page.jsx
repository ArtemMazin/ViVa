import Link from 'next/link';
import {
  goods,
  items,
  item,
  row,
  titleContainer,
  imageContainer,
  image,
  link,
} from './goods.module.css';
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
    <main className={`container ${goods}`}>
      <BreadCrumbs
        currentLink="Товары"
        links={[{ href: 'https://vi-va.vercel.app/', name: 'Главнaя' }]}
      />
      <Htag tag="h1" border="left">
        Наша продукция
      </Htag>
      <ul className={items}>
        {products.map(({ name, img, href }) => {
          return (
            <li key={name} className={item}>
              <div className={row}>
                <Link className={imageContainer} href={href}>
                  <Image
                    src={img}
                    fill
                    sizes="(max-width: 520px) 60vw, (max-width: 768px) 50vw, (max-width: 1280px) 40vw, 100vw"
                    alt={name}
                    className={image}
                    priority={true}
                  />
                </Link>
                <div className={titleContainer}>
                  <Link href={href} className={link}>
                    <Htag tag="h2">{name}</Htag>
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
