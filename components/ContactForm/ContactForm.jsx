'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = useState('');

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading' });
      try {
        const res = await fetch(`/api`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: 'error',
            message: error,
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Заявка отправлена',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Что-то пошло не так...',
        });
      }
    }
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => onSubmitForm(e)}>
        <input
          id='name'
          type='text'
          value={inputs.name}
          onChange={handleChange}
          className={styles.inputField}
          placeholder='Ваше имя'
          required
        />
        <input
          id='email'
          type='email'
          value={inputs.email}
          onChange={handleChange}
          className={styles.inputField}
          placeholder='Ваш e-mail'
          required
        />
        <textarea
          id='message'
          type='text'
          value={inputs.message}
          onChange={handleChange}
          className={styles.inputField}
          placeholder='Введите сообщение'
          rows='5'
          required
        />
        <input
          type='submit'
          className={styles.button}
        />
        {form.state === 'loading' ? (
          <div>Отправка....</div>
        ) : form.state === 'error' ? (
          <div>{form.message}</div>
        ) : (
          form.state === 'success' && <div>Заявка отправлена</div>
        )}
      </form>
    </div>
  );
}
