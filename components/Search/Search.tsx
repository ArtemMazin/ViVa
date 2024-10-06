'use client';

import React, { useCallback, useContext, createContext } from 'react';
import styles from './Search.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useValidationForm } from '@/hooks/useValidationForm';

// Начальные значения для формы поиска
const initialValues = {
  search: '',
};

const initialValid = {
  search: false,
};

// Интерфейс для контекста поиска
interface SearchContextType {
  handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  goToSearch: (e: React.FormEvent) => void;
  values: { search: string };
  handleChangeValidation: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Основной компонент поиска
const SearchCompound: React.FC<{ children: React.ReactNode }> & {
  Form: React.FC<{ children: React.ReactNode }>;
  Input: React.FC;
  Button: React.FC;
} = ({ children }) => {
  const { values, resetForm, handleChangeValidation } = useValidationForm(
    initialValues,
    initialValid,
  );

  const router = useRouter();
  const searchParams = useSearchParams();

  // Функция для создания строки запроса
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  // Обработчик нажатия клавиши Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      goToSearch(e);
    }
  };

  // Функция для перехода на страницу поиска
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

// Компонент формы поиска
SearchCompound.Form = function Form({ children }) {
  const context = useContext(SearchContext);
  if (!context) throw new Error('Form must be used within SearchCompound');

  return (
    <form className={styles.form} onSubmit={context.goToSearch} noValidate>
      {children}
    </form>
  );
};

// Компонент поля ввода поиска
SearchCompound.Input = function Input() {
  const context = useContext(SearchContext);
  if (!context) throw new Error('Input must be used within SearchCompound');

  return (
    <input
      type="search"
      name="search"
      placeholder="Поиск..."
      className={styles.input}
      value={context.values.search || ''}
      onChange={context.handleChangeValidation}
      onKeyDown={context.handleKeyDown}
    />
  );
};

// Компонент кнопки поиска
SearchCompound.Button = function Button() {
  return (
    <button type="submit" className={styles.button}>
      <Search size={24} className={styles.icon} />
    </button>
  );
};

// Компонент строки поиска
const SearchBar: React.FC = () => {
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
