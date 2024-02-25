import { createContext } from 'react';

type PopupContextType = {
  isOpen: boolean;
  onClose: () => void;
  handleOverlay: (e: React.MouseEvent<HTMLElement>) => void;
  style: string;
};

export const PopupContext = createContext<PopupContextType>({
  isOpen: false,
  onClose: () => {},
  handleOverlay: () => {},
  style: '',
});
