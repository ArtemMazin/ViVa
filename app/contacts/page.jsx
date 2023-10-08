import { contacts, contactList } from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Htag from '@/components/Htag/Htag';

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
          <span>
            <strong>Тел./факс:</strong> +7 (495) 926-07-74
          </span>
        </li>
        <li>
          <span>
            <strong>Email:</strong> info@gidmash.ru
          </span>
        </li>
        <li>
          <span>
            <strong>График работы:</strong> Пн - Пт: 10:00 - 17:00
          </span>
        </li>
      </ul>
    </main>
  );
}
