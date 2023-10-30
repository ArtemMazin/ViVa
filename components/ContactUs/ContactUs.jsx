'use client';

import React, { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactUs/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import styles from './ContactUs.module.css';
import { Mail } from 'lucide-react';
import Notification from '../Notification/Notification';
import { useResize } from '@/hooks/useResize';

const ContactUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { isScreenSm } = useResize();

  function openForm() {
    setIsFormOpen(true);
  }
  function closeForm() {
    setIsFormOpen(false);
  }
  function closeNotification() {
    setIsNotificationOpen(false);
  }

  function openNotification() {
    setIsNotificationOpen(true);
  }

  return (
    <>
      <Button type="button" fixed onClick={openForm}>
        {isScreenSm ? <Mail size={30} /> : <span>Оставить заявку</span>}
      </Button>

      <Popup isOpen={isFormOpen} onClose={closeForm} style="form">
        <ContactForm
          onClose={closeForm}
          setMessage={setMessage}
          openNotification={openNotification}
        />
      </Popup>
      <Popup isOpen={isNotificationOpen} onClose={closeNotification}>
        <Notification message={message} />
      </Popup>
    </>
  );
};

export default ContactUs;
