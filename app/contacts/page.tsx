import { Metadata } from 'next';
import styles from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Htag from '@/components/Htag/Htag';
import MailLink from '@/components/Links/Mail/MailLink';
import TelLink from '@/components/Links/Tel/TelLink';
import Ptag from '@/components/Ptag/Ptag';
import JsonLd from '@/components/JsonLd/JsonLd';

export const metadata = {
  title: 'Контакты | ВиВа Групп | Техническая поддержка | Офис в Москве',
  description:
    'Свяжитесь с нами: +7 (495) 926-07-74, info@gidmash.ru. Профессиональные консультации специалистов, оперативная техническая поддержка. Офис в Москве, индивидуальный подход к каждому клиенту, быстрые ответы на все запросы. Доставка по всей России.',
  openGraph: {
    title: 'Контакты | ВиВа Групп | Официальный поставщик HMG',
    description:
      'Офис в Москве, профессиональные консультации по подбору подшипников, индивидуальный подход к каждому проекту. Оперативная связь по телефону и email. Техническая поддержка на всех этапах сотрудничества. Доставка по всей России.',
    url: process.env.URL + '/contacts',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Контакты ВиВа Групп - официального поставщика HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/contacts',
  },
  keywords:
    'контакты ВиВа Групп, техподдержка HMG, консультации по подшипникам',
};

export default function ContactsPage() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ВиВа Групп',
    image: `${process.env.URL}/image/metalicheskie_samosmazivayushiesya/pro03.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'ул. Шарикоподшипниковская, д.1, БЦ «Прогресс Плаза», 7 этаж',
      addressLocality: 'Москва',
      postalCode: '115088',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '55.723553',
      longitude: '37.668811',
    },
    url: `${process.env.URL}/contacts`,
    telephone: '+7(495)926-07-74',
    email: 'info@gidmash.ru',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '17:00',
    },
    vatID: 'ОГРН 1107746428547',
    paymentAccepted: ['Bank Transfer'],
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ВиВа Групп',
    legalName: 'ООО «ВиВа Групп»',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Шарикоподшипниковская, д.1',
      addressLocality: 'Москва',
      postalCode: '115088',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7(495)926-07-74',
      contactType: 'sales',
      email: 'info@gidmash.ru',
      availableLanguage: 'Russian',
    },
  };

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <main className={`${styles.contacts} container`}>
        <BreadCrumbs
          currentLink="Контакты"
          links={[{ href: process.env.URL || '/', name: 'Главная' }]}
        />
        <Htag tag="h1" border="left" className={styles.main_title}>
          Контакты
        </Htag>

        <Ptag>
          Если у вас есть вопросы или предложения, свяжитесь с нами любым
          удобным для Вас способом. Мы будем рады помочь и проконсультировать
          вас по любым вопросам, касающимся подшипников скольжения.
        </Ptag>

        <ul className={styles.contactList}>
          <li className={styles.item}>
            <span>ООО «ВиВа Групп»</span>
          </li>
          <li className={styles.item}>
            <span>
              <strong>Адрес:</strong> 115088 г. Москва, ул.
              Шарикоподшипниковская, д.1, БЦ «Прогресс Плаза», 7 этаж
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
                href="/download/cardviva.doc"
                download
                className={styles.downloadLink}
              >
                Скачать карточку компании
              </a>
            </span>
          </li>
        </ul>
      </main>
    </>
  );
}
