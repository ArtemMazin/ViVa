import React, { useState } from 'react';
import styles from './Content.module.css';
import Image from 'next/image';
import Search from '@/components/Search/Search';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactForm/ContactForm';

const Content = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function openPopup() {
    setIsPopupOpen(true);
  }
  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className={`${styles.flex} container`}>
      <Image
        src='/image/logo-black.svg'
        width={100}
        height={40}
        priority={true}
        alt='Товарный знак HMG'
        className={styles.logo}
      />

      <Search />

      <button onClick={openPopup}>Оставить заявку</button>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}>
        <ContactForm />
      </Popup>

      <div className={styles.contacts}>
        <span>Отдел продаж:</span>
        <a
          href='tel:+74959260774'
          title='Позвонить'
          rel='nofollow'
          className={styles.tel}>
          +7 (495) 926-07-74
        </a>
      </div>
    </div>
  );
};

export default Content;
