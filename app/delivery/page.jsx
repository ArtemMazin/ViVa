import Link from 'next/link';
import { delivery, breadСrumbs, breadСrumbs__link } from './delivery.module.css';

export const metadata = {
  title: 'Оплата и доставка',
  description: 'Оплата и доставка',
};

export default function Delivery() {
  return (
    <main className={`container ${delivery}`}>
      <ul className={breadСrumbs}>
        <li>
          <Link
            href='https://vi-va.vercel.app/'
            title='Главнaя'
            className={breadСrumbs__link}>
            Главнaя
          </Link>
        </li>
        <li>Доставка и оплата</li>
      </ul>
    </main>
  );
}
