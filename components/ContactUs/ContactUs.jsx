'use client';

import React, { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactUs/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import styles from './ContactUs.module.css';
import { Mail } from 'lucide-react';
import useScreenWidth from '@/hooks/useScreenWidth';
import Notification from '../Notification/Notification';

const ContactUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { device } = useScreenWidth();

  function openForm() {
    setIsFormOpen(true);
  }
  function closeAllPopup() {
    setIsFormOpen(false);
    setIsNotificationOpen(false);
  }

  function openNotification() {
    setIsNotificationOpen(true);
  }

  return (
    <>
      <Button type="button" fixed onClick={openForm}>
        {device === 'mobile' ? (
          <Mail size={30} />
        ) : (
          <span>Оставить заявку</span>
        )}
      </Button>

      <Popup isOpen={isFormOpen} onClose={closeAllPopup}>
        <ContactForm
          onClose={closeAllPopup}
          setMessage={setMessage}
          openNotification={openNotification}
        />
      </Popup>
      <Popup isOpen={isNotificationOpen} onClose={closeAllPopup}>
        <Notification message={message} />
      </Popup>
    </>
  );
};

export default ContactUs;
