import { allProducts } from '../utils/materialsLists';

export const filterCards = (search: string) =>
  Array.from(allProducts).filter(item => {
    if (!search) {
      return;
    }
    return item.name.toLowerCase().trim().includes(search.toLowerCase().trim());
  });
