'use client';

import React, { useCallback, useContext } from 'react';
import styles from './Search.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useValidationForm } from '@/hooks/useValidationForm';
import { SearchContext } from '@/contexts/SearchContext';

const initialValues = {
  search: '',
};
const initialValid = {
  search: false,
};

const SearchCompound = ({ children }) => {
  const { values, resetForm, handleChangeValidation } = useValidationForm(
    initialValues,
    initialValid,
  );

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      goToSearch(e);
    }
  };

  const goToSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/search' + '?' + createQueryString('filter', values.search));
    resetForm();
  };

  return (
    <SearchContext.Provider
      value={{ handleKeyDown, goToSearch, values, handleChangeValidation }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchCompound.Form = function Form({ children }) {
  const { goToSearch } = useContext(SearchContext);

  return (
    <form className={styles.form} onSubmit={goToSearch} noValidate>
      {children}
    </form>
  );
};

SearchCompound.Input = function Input() {
  const { handleKeyDown, values, handleChangeValidation } =
    useContext(SearchContext);

  return (
    <input
      type="search"
      name="search"
      placeholder="Поиск..."
      className={styles.input}
      value={values.search || ''}
      onChange={handleChangeValidation}
      onKeyDown={handleKeyDown}
    />
  );
};

SearchCompound.Button = function Button() {
  return (
    <button type="submit" className={styles.button}>
      <Search size={24} className={styles.icon} />
    </button>
  );
};

const SearchBar = () => {
  return (
    <SearchCompound>
      <SearchCompound.Form>
        <SearchCompound.Input />
        <SearchCompound.Button />
      </SearchCompound.Form>
    </SearchCompound>
  );
};

export default SearchBar;
