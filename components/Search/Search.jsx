'use client';

import React, { useCallback, useState } from 'react';
import styles from './Search.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

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
    [searchParams]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  const goToSearch = () => {
    router.push('/search' + '?' + createQueryString('filter', search));
    setSearch('');
  };

  return (
    <div className={styles.form}>
      <input
        type='text'
        placeholder='Поиск...'
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className={styles.button}
        onClick={goToSearch}></button>
    </div>
  );
};

export default Search;
