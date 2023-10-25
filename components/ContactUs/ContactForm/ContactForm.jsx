'use client';

import styles from './ContactForm.module.css';
import Button from '../../Button/Button';
import { useValidationForm } from '@/hooks/useValidationForm';
import {
  REG_EXP_EMAIL,
  REG_EXP_NAME,
  REG_EXP_TEL,
  messages,
} from '@/utils/constants';
import Link from 'next/link';

export default function ContactForm({ onClose }) {
  const {
    values,
    resetForm,
    errors,
    isFormValid,
    handleInput,
    handleChangeValidation,
  } = useValidationForm();

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
        <label>
          Ваше имя<span className={styles.star}>*</span>:
          <input
            name="name"
            type="text"
            value={values.name || ''}
            onChange={e => handleInput(e, REG_EXP_NAME, messages.INPUT_NAME)}
            className={styles.inputField}
            required
          />
          <span className={styles.error}>{errors.name || ''}</span>
        </label>
        <label>
          Ваша почта<span className={styles.star}>*</span>:
          <input
            name="email"
            type="email"
            value={values.email || ''}
            onChange={e => handleInput(e, REG_EXP_EMAIL, messages.INPUT_EMAIL)}
            className={styles.inputField}
            required
          />
          <span className={styles.error}>{errors.email || ''}</span>
        </label>
        <label>
          Ваш телефон<span className={styles.star}>*</span>:
          <input
            name="tel"
            type="tel"
            value={values.tel || ''}
            onChange={e => handleInput(e, REG_EXP_TEL, messages.INPUT_TEL)}
            className={styles.inputField}
            required
          />
          <span className={styles.error}>{errors.tel || ''}</span>
        </label>
        <label>
          Введите сообщение<span className={styles.star}>*</span>:
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
        <label>
          <input
            type="checkbox"
            name="checkbox"
            className={styles.checkbox}
            onClick={handleChangeValidation}
            required
          />
          <span className={styles.subtitle}>
            Нажимая кнопку &quot;Отправить&quot;, Вы даете согласие на{' '}
            <Link href="/privacy" className={styles.link} onClick={onClose}>
              обработку ваших персональных данных.
            </Link>
          </span>
          <span className={styles.error}>{errors.checkbox || ''}</span>
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
