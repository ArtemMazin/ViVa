import { allProducts } from '../utils/materialsLists';
import { MaterialType, TCard } from '@/utils/types';

const HIGH_TEMP_THRESHOLD = 150;
const LOW_TEMP_THRESHOLD = -50;

const filterBySelfLubricating = (product: TCard, selfLubricating: string) =>
  selfLubricating === 'all' ||
  product.selfLubricating === (selfLubricating === 'true');

const filterByMaterialType = (
  product: TCard,
  materialType: MaterialType | 'all',
) => materialType === 'all' || product.materialType === materialType;

const filterByTemperatureRange = (product: TCard, temperatureRange: string) =>
  temperatureRange === 'all' ||
  (temperatureRange === 'high' &&
    product.temperatureRange[1] >= HIGH_TEMP_THRESHOLD) ||
  (temperatureRange === 'low' &&
    product.temperatureRange[0] <= LOW_TEMP_THRESHOLD);

export const filterProducts = (
  selfLubricating: string,
  materialType: MaterialType | 'all',
  temperatureRange: string,
): TCard[] =>
  allProducts.filter(
    product =>
      filterBySelfLubricating(product, selfLubricating) &&
      filterByMaterialType(product, materialType) &&
      filterByTemperatureRange(product, temperatureRange),
  );
