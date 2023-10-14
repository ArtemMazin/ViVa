import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { presentationImage } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mapContainer}>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A778ecc0b2189d3f08dc38c79e91971f31d7cbf00bd0f8e98abad39ff995a7272&amp;source=constructor'
          width='100%'
          height='240'
          frameBorder='0'
          aria-hidden='true'
          title='Встроенные Яндекс Карты'></iframe>
      </div>
      <div className={styles.contentContainer}>
        <div className={`${styles.content} container`}>
          <div className={styles.copy}>
            <Image
              src='/image/logo-white.svg'
              width={100}
              height={40}
              priority={true}
              alt='Товарный знак HMG'
              className={styles.logo}
            />
            <span>&#169; ООО «ВиВа Групп» 2023</span>
          </div>

          <ul className={styles.side}>
            {presentationImage.map(({ name, href }) => {
              return (
                <li
                  key={name}
                  className={styles.item}>
                  <Link
                    href={href}
                    className={styles.link}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.contacts}>
            <span>Отдел продаж:</span>
            <a
              href='tel:+74959260774'
              title='Позвонить'
              rel='nofollow'
              className={styles.tel}>
              <span> +7 (495) 926-07-74</span>
            </a>
            <div className={styles.email}>
              <div className={styles.mailImage}></div>
              <a
                href='mailto:info@gidmash.ru'
                title='Написать письмо'
                rel='nofollow'
                className={styles.mailLink}>
                <span>info@gidmash.ru</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
