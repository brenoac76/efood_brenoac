import React, { createContext, useState, useContext } from 'react';

const PreviousPageContext = createContext();

export const PreviousPageProvider = ({ children }) => {
  const [previousPage, setPreviousPage] = useState('/');

  return (
    <PreviousPageContext.Provider value={{ previousPage, setPreviousPage }}>
      {children}
    </PreviousPageContext.Provider>
  );
};

export const usePreviousPage = () => {
  return useContext(PreviousPageContext);
};
