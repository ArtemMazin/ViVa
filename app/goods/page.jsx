import Link from 'next/link';
import {
  goods,
  items,
  item,
  row,
  title,
  titleContainer,
  imageContainer,
  image,
  link,
  breadСrumbs,
  breadСrumbs__link,
} from './goods.module.css';
import Image from 'next/image';
import { presentationImage } from '@/utils/constants';

export const metadata = {
  title: 'Продукция компании ООО "ВиВа Групп"',
  description: 'Продукция компании ООО "ВиВа Групп"',
};

export default function Goods() {
  return (
    <main className={`container ${goods}`}>
      <ul className={breadСrumbs}>
        <li>
          <Link
            href='https://vi-va.vercel.app/'
            title='Главнaя'
            className={breadСrumbs__link}>
            Главнaя
          </Link>
        </li>
        <li>Товары</li>
      </ul>
      <ul className={items}>
        {presentationImage.map(({ name, img, href }) => {
          return (
            <li
              key={name}
              className={item}
              as={'image'}>
              <div className={row}>
                <Link
                  className={imageContainer}
                  href={href}>
                  <Image
                    src={img}
                    fill
                    // sizes='(max-width: 1269px) 50vw, 22.5vw'
                    alt={name}
                    className={image}
                    priority={true}
                  />
                </Link>
                <div className={titleContainer}>
                  <Link
                    href={href}
                    className={link}>
                    <h2 className={title}>{name}</h2>
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
