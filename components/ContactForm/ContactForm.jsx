'use client';

import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { useValidationForm } from '@/hooks/useValidationForm';

export default function ContactForm() {
  const { values, resetForm, errors, isFormValid, handleChangeValidation } =
    useValidationForm();

  const onSubmitForm = async e => {
    e.preventDefault();

    if (values.name && values.email && values.tel && values.message) {
      const res = await fetch(`/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        return console.log(res.statusText);
      }
      resetForm();
      return res.json();
    }
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        method="POST"
        onSubmit={e => onSubmitForm(e)}
        noValidate
      >
        <span className={styles.title}>ОСТАВИТЬ ЗАЯВКУ</span>
        <span className={styles.subtitle}>
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
          время.
        </span>
        <label className={styles.label}>
          Ваше имя:
          <input
            name="name"
            type="text"
            value={values.name || ''}
            onChange={handleChangeValidation}
            className={styles.inputField}
            required
          />
          <span className={styles.error}>{errors.name || ''}</span>
        </label>
        <label className={styles.label}>
          Ваша почта:
          <input
            name="email"
            type="email"
            value={values.email || ''}
            onChange={handleChangeValidation}
            className={styles.inputField}
            required
          />
          <span className={styles.error}>{errors.email || ''}</span>
        </label>
        <label className={styles.label}>
          Ваш телефон:
          <input
            name="tel"
            type="tel"
            value={values.tel || ''}
            onChange={handleChangeValidation}
            className={styles.inputField}
            required
          />
          <span className={styles.error}>{errors.tel || ''}</span>
        </label>
        <label className={styles.label}>
          Введите сообщение:
          <textarea
            name="message"
            type="text"
            value={values.message || ''}
            onChange={handleChangeValidation}
            className={styles.inputField}
            rows="5"
            required
          />
          <span className={styles.error}>{errors.message || ''}</span>
        </label>

        <Button
          type="submit"
          size="l"
          disabled={!isFormValid}
          isDisable={!isFormValid}
        >
          <span>Отправить</span>
        </Button>
      </form>
    </div>
  );
}
