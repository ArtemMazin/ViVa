import { ChangeEvent, createContext } from 'react';

type SearchContextType = {
  handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  goToSearch: (e: Event) => void;
  values: object;
  handleChangeValidation: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext = createContext<SearchContextType>({
  handleKeyDown: () => {},
  goToSearch: () => {},
  values: {},
  handleChangeValidation: () => {},
});
