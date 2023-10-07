import { delivery } from './delivery.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Оплата и доставка',
  description: 'Оплата и доставка',
};

export default function Delivery() {
  return (
    <main className={`container ${delivery}`}>
      <BreadCrumbs
        currentLink='Доставка и оплата'
        links={[{ href: 'https://vi-va.vercel.app/', name: 'Главнaя' }]}
      />
    </main>
  );
}
