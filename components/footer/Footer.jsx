import React from 'react';
import {
  footer,
  content,
  copy,
  logo,
  contentContainer,
  mapContainer,
  side,
  item,
  link,
  contacts,
  tel,
  email,
  mailImage,
  mailLink,
} from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { presentationImage } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={mapContainer}>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A778ecc0b2189d3f08dc38c79e91971f31d7cbf00bd0f8e98abad39ff995a7272&amp;source=constructor'
          width='100%'
          height='240'
          frameBorder='0'
          aria-hidden='true'
          title='Встроенные Яндекс Карты'></iframe>
      </div>
      <div className={contentContainer}>
        <div className={`${content} container`}>
          <div className={copy}>
            <Image
              src='/image/logo-white.svg'
              width={100}
              height={40}
              priority={true}
              alt='Товарный знак HMG'
              className={logo}></Image>
            <span>&#169; ООО «ВиВа Групп» 2023</span>
          </div>

          <ul className={side}>
            {presentationImage.map(({ name, href }) => {
              return (
                <li
                  key={name}
                  className={item}>
                  <Link
                    href={href}
                    className={link}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={contacts}>
            <span>Отдел продаж:</span>
            <a
              href='tel:+74959260774'
              title='Позвонить'
              rel='nofollow'
              className={tel}>
              <span> +7 (495) 926-07-74</span>
            </a>
            <div className={email}>
              <div className={mailImage}></div>
              <a
                href='mailto:info@gidmash.ru'
                title='Написать письмо'
                rel='nofollow'
                className={mailLink}>
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
