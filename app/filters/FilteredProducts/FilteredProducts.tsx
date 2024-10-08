'use client';

import React, { useState, useMemo, useCallback } from 'react';
import CardList from '@/components/CardList/CardList';
import Htag from '@/components/Htag/Htag';
import styles from './FilteredProducts.module.css';
import { MaterialType } from '@/utils/types';
import { filterProducts } from '@/services/filter';
import FilterBlock from '../FilterBlock/FilterBlock';

const FilteredProducts = () => {
  const [selfLubricating, setSelfLubricating] = useState<string>('all');
  const [materialType, setMaterialType] = useState<MaterialType | 'all'>('all');
  const [temperatureRange, setTemperatureRange] = useState<string>('all');

  const handleSelfLubricatingChange = useCallback((value: string) => {
    setSelfLubricating(value);
  }, []);

  const handleMaterialTypeChange = useCallback(
    (value: MaterialType | 'all') => {
      setMaterialType(value);
    },
    [],
  );

  const handleTemperatureRangeChange = useCallback((value: string) => {
    setTemperatureRange(value);
  }, []);

  const filteredProducts = useMemo(
    () => filterProducts(selfLubricating, materialType, temperatureRange),
    [selfLubricating, materialType, temperatureRange],
  );

  return (
    <div className={styles.filteredProducts}>
      <div className={styles.filterColumn}>
        <FilterBlock
          selfLubricating={selfLubricating}
          materialType={materialType}
          temperatureRange={temperatureRange}
          onSelfLubricatingChange={handleSelfLubricatingChange}
          onMaterialTypeChange={handleMaterialTypeChange}
          onTemperatureRangeChange={handleTemperatureRangeChange}
        />
      </div>
      <div className={styles.productColumn}>
        {filteredProducts.length === 0 ? (
          <Htag tag="h2" className={styles.text}>
            Ничего не найдено
          </Htag>
        ) : (
          <CardList array={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
