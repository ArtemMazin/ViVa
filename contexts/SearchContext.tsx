import React from 'react';

type SearchContextType = {
  handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  goToSearch: (e: React.FormEvent) => void;
  values: {
    search: string;
  };
  handleChangeValidation: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext = React.createContext<SearchContextType>({
  handleKeyDown: () => {},
  goToSearch: () => {},
  values: {
    search: '',
  },
  handleChangeValidation: () => {},
});
