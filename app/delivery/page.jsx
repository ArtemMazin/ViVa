import { delivery } from './delivery.module.css';

export const metadata = {
  title: 'Оплата и доставка',
  description: 'Оплата и доставка',
};

export default function Delivery() {
  return <main className={`container ${delivery}`}>Delivery</main>;
}
