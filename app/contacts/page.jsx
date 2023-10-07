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
    </main>
  );
}
