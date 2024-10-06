'use client';

import React, { useState } from 'react';
import Popup from '@/components/Popup/Popup';
import ContactForm from '@/components/ContactUs/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import { Mail } from 'lucide-react';
import Notification from '../Notification/Notification';
import { useResize } from '@/hooks/useResize';

const ContactUs: React.FC = () => {
  // Состояния для управления открытием/закрытием формы и уведомления
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // Хук для определения размера экрана
  const { isScreenSm } = useResize();

  // Функции для управления состоянием компонентов
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const closeNotification = () => setIsNotificationOpen(false);
  const openNotification = () => setIsNotificationOpen(true);

  return (
    <>
      {/* Кнопка для открытия формы */}
      <Button type="button" fixed onClick={openForm}>
        {isScreenSm ? <Mail size={30} /> : <span>Оставить заявку</span>}
      </Button>

      {/* Попап с формой обратной связи */}
      <Popup isOpen={isFormOpen} onClose={closeForm} style="form">
        <ContactForm
          onClose={closeForm}
          setMessage={setMessage}
          openNotification={openNotification}
        />
      </Popup>

      {/* Попап с уведомлением */}
      <Popup isOpen={isNotificationOpen} onClose={closeNotification}>
        <Notification message={message} />
      </Popup>
    </>
  );
};

export default ContactUs;
