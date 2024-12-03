import { Metadata } from 'next';
import Htag from '@/components/Htag/Htag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './delivery.module.css';
import Ptag from '@/components/Ptag/Ptag';

export const metadata: Metadata = {
  title: 'Доставка подшипников скольжения HMG по России и СНГ | ВиВа Групп',
  description:
    'Организуем быструю и надежную доставку подшипников скольжения HMG по всей России и СНГ. Самовывоз со склада в Москве, доставка через ведущие транспортные компании: СДЭК, DPD, Деловые Линии. Отслеживание грузов.',
  openGraph: {
    title:
      'Доставка подшипников скольжения HMG | Отправка по России и СНГ | ВиВа Групп',
    description:
      'Оперативная доставка подшипников скольжения HMG от официального поставщика. Самовывоз в Москве, доставка по России и СНГ через надёжные транспортные компании. Полное сопровождение груза, гарантия сохранности.',
    url: process.env.URL + '/delivery',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
        width: 1200,
        height: 630,
        alt: 'Доставка подшипников скольжения HMG',
      },
    ],
    locale: 'ru-RU',
    type: 'website',
    siteName: 'ВиВа Групп',
  },
  alternates: {
    canonical: process.env.URL + '/delivery',
  },
};

export default function DeliveryPage() {
  return (
    <main className={`container ${styles.delivery}`}>
      <BreadCrumbs
        currentLink="Доставка"
        links={[{ href: process.env.URL || '/', name: 'Главная' }]}
      />
      <Htag tag="h1" border="left" className={styles.main_title}>
        Доставка подшипников скольжения
      </Htag>
      <Htag tag="h2">Способы доставки:</Htag>
      <section>
        <Htag tag="h3" border="down">
          Самовывоз
        </Htag>
        <Ptag>
          Вы можете забрать заказанные подшипники скольжения со склада компании,
          расположенного в Московской области. Для удобства клиентов
          предусмотрена бесплатная парковка.
        </Ptag>
        <ul className={styles.places}>
          <li>
            <span className={styles.text}>
              <strong>Наш склад:</strong> Московская область, Раменский
              городской округ, аэродром Мячково
            </span>
            <span className={styles.text}>
              <strong>График работы:</strong> ПН-ПТ 09:00 - 17:00
            </span>
            <a
              href="/download/sklad.doc"
              download
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
      </section>

      <section>
        <Htag tag="h3" border="down">
          Доставка транспортной компанией
        </Htag>
        <Ptag>
          Мы сотрудничаем с ведущими транспортными компаниями России и СНГ для
          быстрой и надежной доставки подшипников скольжения в любой регион.
          Стоимость доставки рассчитывается индивидуально в зависимости от веса,
          габаритов груза и пункта назначения.
        </Ptag>
        <ul className={styles.companies}>
          <li>
            <span className={styles.text}>Деловые Линии</span>
          </li>
          <li>
            <span className={styles.text}>СДЭК</span>
          </li>
          <li>
            <span className={styles.text}>ПЭК</span>
          </li>
          <li>
            <span className={styles.text}>Желдорэкспедиция</span>
          </li>
        </ul>
      </section>

      <section>
        <Htag tag="h3" border="down">
          Международная доставка
        </Htag>
        <Ptag margin="bottom">
          Для клиентов из стран СНГ и Восточной Европы мы организуем
          международную доставку подшипников скольжения. Доставка осуществляется
          ведущими логистическими компаниями с соблюдением всех таможенных
          процедур.
        </Ptag>
      </section>
    </main>
  );
}
