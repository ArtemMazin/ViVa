import styles from './contacts.module.css';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ContactForm from '@/components/ContactForm/ContactForm';
import Htag from '@/components/Htag/Htag';

export const metadata = {
  title: 'Контакты ООО "ВиВа Групп"',
  description: 'Контакты ООО "ВиВа Групп"',
};

export default function Contacts() {
  return (
    <main className={`${styles.contacts} container`}>
      <BreadCrumbs
        currentLink='Контакты'
        links={[{ href: 'https://vi-va.vercel.app/', name: 'Главнaя' }]}
      />
      <Htag
        tag='h1'
        border='left'>
        Контакты
      </Htag>
      <div className={styles.content}>
        <ul className={styles.contactList}>
          <li>
            <span>ООО «ВиВа Групп»</span>
          </li>
          <li>
            <span>
              <strong>Адрес:</strong> 115088 г. Москва, ул. Шарикоподшипниковская, д.1,
              <br />
              БЦ «Прогресс Плаза», 7 этаж
            </span>
          </li>
          <li>
            <div className={styles.contact}>
              <strong>Тел./факс:</strong>
              <a
                href='tel:+74959260774'
                title='Позвонить'
                rel='nofollow'
                className={styles.tel}>
                <span> +7 (495) 926-07-74</span>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.contact}>
              <strong>Email:</strong>
              <a
                href='mailto:info@gidmash.ru'
                title='Написать письмо'
                rel='nofollow'
                className={styles.mailLink}>
                <span>info@gidmash.ru</span>
              </a>
            </div>
          </li>
          <li>
            <span>
              <strong>График работы:</strong> ПН - ПТ: 10:00 - 17:00
            </span>
          </li>
          <li>
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
                className={styles.downloadLink}>
                Скачать карточку компании
              </a>
            </span>
          </li>
        </ul>

        <ContactForm />
      </div>
    </main>
  );
}
