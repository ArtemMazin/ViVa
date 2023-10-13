import React, { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import styles from './MobileHeader.module.css';
import Image from 'next/image';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.mobile}>
      <div className={styles.container}>
        <Image
          src='/image/logo-black.svg'
          width={80}
          height={32}
          priority={true}
          alt='Товарный знак HMG'
          className={styles.logo}
        />
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <Image
              src='/image/phone.svg'
              width={16}
              height={16}
              priority={true}
              alt=''
            />
            <a
              href='tel:+74959260774'
              title='Позвонить'
              rel='nofollow'
              className={styles.link}>
              +7 (495) 926-07-74
            </a>
          </div>

          <div className={styles.contact}>
            <Image
              src='/image/mail.svg'
              width={16}
              height={16}
              priority={true}
              alt=''
            />
            <a
              href='mailto:info@gidmash.ru'
              title='Написать письмо'
              rel='nofollow'
              className={styles.link}>
              <span>info@gidmash.ru</span>
            </a>
          </div>
        </div>
        {isMenuOpen ? (
          <button
            className={`${styles.button} ${styles.button_close}`}
            onClick={toggleHideMenu}
          />
        ) : (
          <button
            className={`${styles.button} ${styles.button_open}`}
            onClick={toggleHideMenu}
          />
        )}
      </div>
      <MobileMenu
        toggleHideMenu={toggleHideMenu}
        isMenuOpen={isMenuOpen}
      />
    </header>
  );
};

export default MobileHeader;
