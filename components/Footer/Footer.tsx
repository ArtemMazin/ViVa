import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { products } from '@/utils/products';
import Logo from '../Logo/Logo';
import MailLink from '../Links/Mail/MailLink';
import TelLink from '../Links/Tel/TelLink';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Контейнер с картой */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A778ecc0b2189d3f08dc38c79e91971f31d7cbf00bd0f8e98abad39ff995a7272&amp;source=constructor"
          width="100%"
          height="240"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Контейнер с контентом футера */}
      <div className={styles.contentContainer}>
        <div className={`${styles.content} container`}>
          {/* Копирайт и логотип */}
          <div className={styles.copy}>
            <Logo src="/image/logo-white.svg" />
            <span>&#169; ООО «ВиВа Групп» 2024</span>
          </div>

          {/* Список продуктов */}
          <ul className={styles.side}>
            {products.map(({ name, href }) => (
              <li key={name} className={styles.item}>
                <Link href={href} className={styles.link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Контактная информация */}
          <div className={styles.contacts}>
            <span>Офис продаж:</span>
            <TelLink color="white" />
            <MailLink color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
