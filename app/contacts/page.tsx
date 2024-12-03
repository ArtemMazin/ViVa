import { Metadata } from 'next';
import styles from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Htag from '@/components/Htag/Htag';
import MailLink from '@/components/Links/Mail/MailLink';
import TelLink from '@/components/Links/Tel/TelLink';
import Ptag from '@/components/Ptag/Ptag';

export const metadata: Metadata = {
  title: 'Контакты ООО "ВиВа Групп" | Официальный поставщик подшипников HMG',
  description:
    'Свяжитесь с официальным поставщиком подшипников HMG в России. Наш офис в Москве, консультации специалистов, техническая поддержка. Телефон: +7 (495) 926-07-74, email: info@gidmash.ru. Оперативные ответы на все запросы.',
  openGraph: {
    title: 'Контакты ООО "ВиВа Групп" | Подшипники скольжения HMG',
    description:
      'Контакты официального поставщика подшипников HMG в России. Профессиональные консультации, индивидуальный подход к каждому клиенту. Офис в Москве, доставка по всей России. Оперативные ответы на все запросы.',
    url: process.env.URL + '/contacts',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'ВиВа Групп - контактная информация',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/contacts',
  },
};

export default function ContactsPage() {
  return (
    <main className={`${styles.contacts} container`}>
      <BreadCrumbs
        currentLink="Контакты"
        links={[{ href: process.env.URL || '/', name: 'Главная' }]}
      />
      <Htag tag="h1" border="left" className={styles.main_title}>
        Контакты
      </Htag>

      <Ptag>
        Если у вас есть вопросы или предложения, свяжитесь с нами любым удобным
        для Вас способом. Мы будем рады помочь и проконсультировать вас по любым
        вопросам, касающимся подшипников скольжения.
      </Ptag>

      <ul className={styles.contactList}>
        <li className={styles.item}>
          <span>ООО «ВиВа Групп»</span>
        </li>
        <li className={styles.item}>
          <span>
            <strong>Адрес:</strong> 115088 г. Москва, ул. Шарикоподшипниковская,
            д.1, БЦ «Прогресс Плаза», 7 этаж
          </span>
        </li>
        <li className={styles.item}>
          <strong>Тел./факс:</strong>
          <TelLink color="black" />
        </li>
        <li className={styles.item}>
          <strong>Email:</strong>
          <MailLink color="black" />
        </li>
        <li className={styles.item}>
          <span>
            <strong>График работы:</strong> ПН - ПТ: 10:00 - 17:00
          </span>
        </li>
        <li className={styles.item}>
          <span>
            <strong>Реквизиты:</strong> <br />
            ООО «ВиВа Групп»
            <br />
            115088, г.Москва, ул.Шарикоподшипниковская д.1 <br />
            ОКПО 66475124
            <br />
            ОГРН 1107746428547
            <br />
            Расчетный счет 40702810102080002688
            <br />
            в АО «АЛЬФА-БАНК» г. Москва
            <br />
            БИК 044525593
            <br />
            Корр. счет 30101810200000000593
            <br />
            <a
              href="/download/cardViVa.doc"
              download
              className={styles.downloadLink}
            >
              Скачать карточку компании
            </a>
          </span>
        </li>
      </ul>
    </main>
  );
}
