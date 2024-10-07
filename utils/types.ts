// Определение типа для карточки
export type MaterialType =
  | 'металлополимерный'
  | 'металлический'
  | 'полимер'
  | 'бронза';

export type TCard = {
  name: string;
  img: string;
  href: string;
  description?: string;
  maxLoad: number;
  maxSpeed: number | null;
  frictionCoefficient: [number | null, number | null];
  temperatureRange: [number, number];
  selfLubricating: boolean;
  maxPV: number;
  thermalConductivity?: number;
  materialType: MaterialType;
  hardness?: number;
  tensileStrength?: number;
  elongation?: number;
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
