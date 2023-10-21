'use client';

import React, { useCallback, useState } from 'react';
import styles from './Search.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Icon from '../../public/image/search.svg';

const Search = () => {
  const [search, setSearch] = useState('');

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
    router.push('/search' + '?' + createQueryString('filter', search));
    setSearch('');
  };

  return (
    <form className={styles.form} onSubmit={goToSearch}>
      <input
        type="search"
        placeholder="Поиск..."
        className={styles.input}
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className={styles.button}>
        <Icon className={styles.icon} />
      </button>
    </form>
  );
};

export default Search;
