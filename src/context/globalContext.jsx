import React, { createContext, useReducer, useContext, useState } from 'react';

// Initial state
const initialState = {
  transactions: [
    { id: 1, category: 'Flower', amount: -20 },
    { id: 2, category: 'Salary', amount: 300 },
    { id: 3, category: 'Book', amount: -10 },
    { id: 4, category: 'Camera', amount: 150 },
  ],
};

// Create Context
const GlobalContext = createContext(initialState);

// Procider component
const GlobalProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GlobalContext.Provider value={(loading, isModalOpen)}>
      {children}
    </GlobalContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
