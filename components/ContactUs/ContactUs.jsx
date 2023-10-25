'use client';

import React, { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactUs/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import styles from './ContactUs.module.css';
import { Mail } from 'lucide-react';
import useScreenWidth from '@/hooks/useScreenWidth';

const ContactUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { device } = useScreenWidth();

  function openPopup() {
    setIsPopupOpen(true);
  }
  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <Button type="button" fixed onClick={openPopup}>
        {device === 'mobile' ? (
          <Mail size={30} />
        ) : (
          <span>Оставить заявку</span>
        )}
      </Button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <ContactForm onClose={closePopup} />
      </Popup>
    </>
  );
};

export default ContactUs;
