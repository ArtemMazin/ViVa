import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './delivery.module.css';

export const metadata = {
  title: 'Доставка',
  description: 'Доставка',
};

export default function Delivery() {
  return (
    <main className={`container ${styles.delivery}`}>
      <BreadCrumbs
        currentLink="Доставка"
        links={[{ href: process.env.URL, name: 'Главнaя' }]}
      />
      <Htag tag="h1" border="left" className={styles.main_title}>
        Доставка
      </Htag>
      <Htag tag="h2">Способы доставки:</Htag>
      <Htag tag="h3" border="down">
        Самовывоз
      </Htag>
      <ul className={styles.places}>
        <li>
          <span className={styles.text}>
            <strong>Наш склад:</strong> Московская область, Раменский городской
            округ, аэродром Мячково
          </span>
          <span className={styles.text}>
            <strong>График работы:</strong> ПН-ПТ 09:00 - 17:00
          </span>
          <a
            href={'/download/sklad.doc'}
            download={true}
            className={styles.downloadLink}
          >
            Скачать схему проезда на склад
          </a>
        </li>
        <li>
          <span className={styles.text}>
            <strong>Наш офис:</strong> 115088, Москва, ул.
            Шарикоподшипниковская, д.1, БЦ «Прогресс Плаза», 7 этаж.
          </span>
          <span className={styles.text}>
            <strong>График работы:</strong> ПН-ПТ 10:00 - 17:00
          </span>
        </li>
      </ul>

      <Htag tag="h3" border="down">
        Транспортной компанией
      </Htag>
      <ul className={styles.companies}>
        <li>
          <span className={styles.text}>Деловые Линии</span>
        </li>
        <li>
          <span className={styles.text}>СДЭК</span>
        </li>
      </ul>
    </main>
  );
}
