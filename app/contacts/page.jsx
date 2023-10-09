import { contacts, contactList, contact, mailLink, tel } from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Htag from '@/components/Htag/Htag';
import Link from 'next/link';

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
      <Htag
        tag='h1'
        border='left'>
        Контакты
      </Htag>
      <ul className={contactList}>
        <li>
          <span>ООО «ВиВа Групп»</span>
        </li>
        <li>
          <span>
            <strong>Адрес:</strong> 115088 г. Москва, ул. Шарикоподшипниковская, д.1, БЦ «Прогресс Плаза», 7 этаж
          </span>
        </li>
        <li>
          <div className={contact}>
            <strong>Тел./факс:</strong>
            <Link
              href='tel:+74959260774'
              title='Позвонить'
              rel='nofollow'
              className={tel}>
              <span> +7 (495) 926-07-74</span>
            </Link>
          </div>
        </li>
        <li>
          <div className={contact}>
            <strong>Email:</strong>
            <Link
              href='mailto:info@gidmash.ru'
              title='Написать письмо'
              rel='nofollow'
              className={mailLink}>
              <span>info@gidmash.ru</span>
            </Link>
          </div>
        </li>
        <li>
          <span>
            <strong>График работы:</strong> ПН - ПТ: 10:00 - 17:00
          </span>
        </li>
      </ul>
    </main>
  );
}
