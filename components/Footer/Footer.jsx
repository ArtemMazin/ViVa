import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { products } from '@/utils/products';
import Logo from '../Logo/Logo';
import MailLink from '../Links/Mail/MailLink';
import TelLink from '../Links/Tel/TelLink';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4494.215626507461!2d37.6640177!3d55.7218785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b2849646c27%3A0xf832286d4ecfc2e2!2z0J_RgNC-0LPRgNC10YHRgS3Qn9C70LDQt9Cw!5e0!3m2!1sru!2sru!4v1697799578951!5m2!1sru!2sru"
          height="200"
          style={{ border: 0, width: '100%' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.contentContainer}>
        <div className={`${styles.content} container`}>
          <div className={styles.copy}>
            <Logo src="/image/logo-white.svg" />
            <span>&#169; ООО «ВиВа Групп» 2023</span>
          </div>

          <ul className={styles.side}>
            {products.map(({ name, href }) => {
              return (
                <li key={name} className={styles.item}>
                  <Link href={href} className={styles.link}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.contacts}>
            <span>Отдел продаж:</span>
            <TelLink color="white" />
            <MailLink color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
