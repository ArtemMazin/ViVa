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
  breadCrumbs,
  breadCrumbs__link,
} from './goods.module.css';
import Image from 'next/image';
import { presentationImage } from '@/utils/constants';
import Htag from '@/components/Htag/Htag';

export const metadata = {
  title: 'Продукция компании ООО "ВиВа Групп"',
  description: 'Продукция компании ООО "ВиВа Групп"',
};

export default function Goods() {
  return (
    <main className={`container ${goods}`}>
      <ul className={breadCrumbs}>
        <li>
          <Link
            href='https://vi-va.vercel.app/'
            title='Главнaя'
            className={breadCrumbs__link}>
            Главнaя
          </Link>
        </li>
        <li>Товары</li>
      </ul>
      <Htag tag='h1'>НАША ПРОДУКЦИЯ</Htag>
      <Htag tag='h2'>HMG/ВТУЛКИ/ШАЙБЫ/ЛЕНТА</Htag>
      <ul className={items}>
        {presentationImage.map(({ name, img, href }) => {
          return (
            <li
              key={name}
              className={item}>
              <div className={row}>
                <Link
                  className={imageContainer}
                  href={href}>
                  <Image
                    src={img}
                    fill
                    sizes='(max-width: 520px) 30vw, (max-width: 768px) 50vw, 100vw'
                    alt={name}
                    className={image}
                    priority={true}
                  />
                </Link>
                <div className={titleContainer}>
                  <Link
                    href={href}
                    className={link}>
                    <Htag tag='h3'>{name}</Htag>
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
