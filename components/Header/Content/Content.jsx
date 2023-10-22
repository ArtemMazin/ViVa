import React, { useState } from 'react';
import styles from './Content.module.css';
import Search from '@/components/Search/Search';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import Logo from '@/components/Logo/Logo';
import TelLink from '@/components/Links/Tel/TelLink';

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
      <Logo src="/image/logo-black.svg" />

      <Search />

      <div className={styles.contacts}>
        <span>Отдел продаж:</span>
        <TelLink color="black" />
      </div>

      <Button type="button" onClick={openPopup}>
        <span>Оставить заявку</span>
      </Button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <ContactForm />
      </Popup>
    </div>
  );
};

export default Content;
