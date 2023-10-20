import { allProducts } from '@/utils/productLists';

export const filterCards = (search) =>
  Array.from(allProducts).filter((item) => {
    if (!search) {
      return;
    }
    return item.name.toLowerCase().trim().includes(search.toLowerCase().trim());
  });
