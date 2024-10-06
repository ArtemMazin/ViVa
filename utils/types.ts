// Определение типа для карточки
export type TCard = {
  name: string;
  img: string;
  href: string;
  description?: string;
};

// Определение типа для слайда в табовом переключателе
export type TTabSwitchSlide = {
  name: string;
  icon: string;
  description: string;
  places: string[];
  image: string;
  number: string;
};

// Определение типа для продукта
export type TProduct = {
  name: string;
  img: string;
  href: string;
  description: string;
};
