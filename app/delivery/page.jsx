import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './delivery.module.css';
import Ptag from '@/components/Ptag/Ptag';

export const metadata = {
  title: 'Доставка',
  description: 'Доставка',
};

export default function Delivery() {
  return (
    <main className={`container ${styles.delivery}`}>
      <BreadCrumbs
        currentLink='Доставка'
        links={[{ href: 'https://vi-va.vercel.app/', name: 'Главнaя' }]}
      />
      <Htag
        tag='h1'
        border='left'>
        Доставка
      </Htag>
      <Htag tag='h2'>Способы доставки:</Htag>
      <Htag
        tag='h3'
        border='down'>
        Самовывоз
      </Htag>
      <ul className={styles.places}>
        <li>
          <Ptag tag='p'>
            <strong>Наш склад:</strong> Московская область, Раменский городской округ, аэродром Мячково <br />
            <strong>График работы:</strong> ПН-ПТ 09:00 - 17:00
          </Ptag>
          <a
            href={'/download/sklad.doc'}
            download={true}
            className={styles.downloadLink}>
            Скачать схему проезда на склад
          </a>
        </li>
        <li>
          <Ptag tag='p'>
            <strong>Наш офис:</strong> 115088, Москва, ул. Шарикоподшипниковская, д.1, БЦ «Прогресс Плаза», 7 этаж.{' '}
            <br />
            <strong>График работы:</strong> ПН-ПТ 10:00 - 17:00
          </Ptag>
        </li>
      </ul>

      <Htag
        tag='h3'
        border='down'>
        Транспортной компанией
      </Htag>
      <ul className={styles.companies}>
        <li>
          <span className={styles.company}>Деловые Линии</span>
        </li>
        <li>
          <span className={styles.company}>СДЭК</span>
        </li>
      </ul>
    </main>
  );
}
