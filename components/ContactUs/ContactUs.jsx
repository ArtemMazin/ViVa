'use client';

import React, { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function openPopup() {
    setIsPopupOpen(true);
  }
  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <Button type="button" fixed onClick={openPopup}>
        <span>Оставить заявку</span>
      </Button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <ContactForm onClose={closePopup} />
      </Popup>
    </>
  );
};

export default ContactUs;
