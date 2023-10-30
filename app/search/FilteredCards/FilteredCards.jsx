'use client';

import CardList from '@/components/CardList/CardList';
import Htag from '@/components/Htag/Htag';
import { useSearchParams } from 'next/navigation';
import styles from './FilteredCards.module.css';
import React from 'react';
import { filterCards } from '@/services/filterService';
import { useResize } from '@/hooks/useResize';

const FilteredCards = () => {
  const { isScreenXxl } = useResize();
  const searchParams = useSearchParams();

  const search = searchParams.get('filter');

  const filteredCards = filterCards(search);

  return (
    <div className={isScreenXxl ? 'container' : ''}>
      {filteredCards.length === 0 ? (
        <Htag tag="h2" className={styles.text}>
          Ничего не найдено
        </Htag>
      ) : (
        <CardList array={filteredCards} />
      )}
    </div>
  );
};

export default FilteredCards;
