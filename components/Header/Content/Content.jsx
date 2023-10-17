import React, { useState } from 'react';
import styles from './Content.module.css';
import Search from '@/components/Search/Search';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import Logo from '@/components/Logo/Logo';

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
      <Logo src='/image/logo-black.svg' />

      <Search />

      <Button
        type='button'
        onClick={openPopup}>
        <span>Оставить заявку</span>
      </Button>

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

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}>
        <ContactForm />
      </Popup>
    </div>
  );
};

export default Content;
