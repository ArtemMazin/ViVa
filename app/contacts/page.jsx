import Link from 'next/link';
import { contacts, breadСrumbs, breadСrumbs__link } from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export const metadata = {
  title: 'Контакты ООО "ВиВа Групп"',
  description: 'Контакты ООО "ВиВа Групп"',
};

export default function Contacts() {
  return (
    <main className={`${contacts} container`}>
      <BreadCrumbs
        currentLink='Контакты'
        links={[{ href: 'https://vi-va.vercel.app/', name: 'Главнaя' }]}
      />
      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A778ecc0b2189d3f08dc38c79e91971f31d7cbf00bd0f8e98abad39ff995a7272&amp;source=constructor'
        width='100%'
        height='300'
        title='Встроенные Яндекс Карты'
        frameBorder={0}></iframe>
    </main>
  );
}
