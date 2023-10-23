'use client';

import React, { useCallback } from 'react';
import styles from './Search.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useValidationForm } from '@/hooks/useValidationForm';

const SearchBar = () => {
  const { values, resetForm, handleChangeValidation } = useValidationForm();

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      goToSearch(e);
    }
  };

  const goToSearch = e => {
    e.preventDefault();
    router.push('/search' + '?' + createQueryString('filter', values.search));
    resetForm();
  };

  return (
    <form className={styles.form} onSubmit={goToSearch} noValidate>
      <input
        type="search"
        name="search"
        placeholder="Поиск..."
        className={styles.input}
        value={values.search || ''}
        onChange={handleChangeValidation}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className={styles.button}>
        <Search size={24} className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
