import styles from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Htag from '@/components/Htag/Htag';
import MailLink from '@/components/Links/Mail/MailLink';
import TelLink from '@/components/Links/Tel/TelLink';

export const metadata = {
  title: 'Контакты ООО "ВиВа Групп"',
  description: 'Контакты ООО "ВиВа Групп"',
};

export default function Contacts() {
  return (
    <main className={`${styles.contacts} container`}>
      <BreadCrumbs
        currentLink="Контакты"
        links={[{ href: process.env.URL, name: 'Главнaя' }]}
      />
      <Htag tag="h1" border="left" className={styles.main_title}>
        Контакты
      </Htag>

      <ul className={styles.contactList}>
        <li className={styles.item}>
          <span>ООО «ВиВа Групп»</span>
        </li>
        <li className={styles.item}>
          <span>
            <strong>Адрес:</strong> 115088 г. Москва, ул. Шарикоподшипниковская,
            д.1,
            <br />
            БЦ «Прогресс Плаза», 7 этаж
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
            Кор.счет 30101810200000000593
            <br />
            <a
              href={'/download/cardViVa.doc'}
              download={true}
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
