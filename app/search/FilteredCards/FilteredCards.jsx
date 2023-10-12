'use client';

import CardList from '@/components/CardList/CardList';
import Htag from '@/components/Htag/Htag';
import { allProducts } from '@/utils/productLists';
import { useSearchParams } from 'next/navigation';
import styles from './FilteredCards.module.css';
import React from 'react';

const FilteredCards = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('filter');

  const filteredCards = Array.from(allProducts).filter((item) => {
    if (!search) {
      return;
    }
    return item.name.toLowerCase().trim().includes(search.toLowerCase().trim());
  });

  return (
    <>
      {filteredCards.length === 0 ? (
        <Htag
          tag='h2'
          className={styles.text}>
          Ничего не найдено
        </Htag>
      ) : (
        <CardList array={filteredCards} />
      )}
    </>
  );
};

export default FilteredCards;
