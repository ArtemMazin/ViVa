import React from 'react';
import styles from './FilterBlock.module.css';
import { MaterialType } from '@/utils/types';

type FilterBlockProps = {
  selfLubricating: string;
  materialType: MaterialType | 'all';
  temperatureRange: string;
  onSelfLubricatingChange: (value: string) => void;
  onMaterialTypeChange: (value: MaterialType | 'all') => void;
  onTemperatureRangeChange: (value: string) => void;
};

const FilterBlock: React.FC<FilterBlockProps> = ({
  selfLubricating,
  materialType,
  temperatureRange,
  onSelfLubricatingChange,
  onMaterialTypeChange,
  onTemperatureRangeChange,
}) => {
  return (
    <div className={styles.filterBlock}>
      <h2 className={styles.filterTitle}>Фильтры</h2>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSectionTitle}>Смазочный режим</h3>
        <select
          className={styles.filterSelect}
          value={selfLubricating}
          onChange={e => onSelfLubricatingChange(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="true">Самосмазывающиеся</option>
          <option value="false">Требуют смазки</option>
        </select>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSectionTitle}>Тип материала</h3>
        <select
          className={styles.filterSelect}
          value={materialType}
          onChange={e =>
            onMaterialTypeChange(e.target.value as MaterialType | 'all')
          }
        >
          <option value="all">Все</option>
          <option value="металлополимерный">Металлополимерный</option>
          <option value="металлический">Металлический</option>
          <option value="полимер">Полимер</option>
          <option value="бронза">Бронза</option>
        </select>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSectionTitle}>Температурный диапазон</h3>
        <select
          className={styles.filterSelect}
          value={temperatureRange}
          onChange={e => onTemperatureRangeChange(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="high">Высокотемпературные</option>
          <option value="low">Низкотемпературные</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBlock;
