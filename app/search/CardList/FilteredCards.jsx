'use client';

import CardList from '@/components/CardList/CardList';
import { allProducts } from '@/utils/productLists';
import { useSearchParams } from 'next/navigation';
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

  return <CardList array={filteredCards} />;
};

export default FilteredCards;
