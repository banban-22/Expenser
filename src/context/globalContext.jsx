import axios from 'axios';
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

// const API_KEY = `${process.env.REACT_APP_API_KEY}`;
// const rateUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency1}`;

// Create Context
const GlobalContext = createContext(initialState);

// Procider component
const GlobalProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency1, setCurrency1] = useState([]);
  const [currency2, setCurrency2] = useState([]);
  const [amount1, setAmount1] = useState(0);
  const [rate, setRate] = useState([]);

  // const fetchCurrency = async (url) => {
  //   setLoading(true);

  //   const response = await axios(url).catch((err) => console.log(err));

  //   if (response) {
  //     const data = response.data.results;
  //     console.log(data);
  //   } else {
  //   }
  // };

  // const fetchCurrencyRate = async () => {
  //   const rateUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency1}`;

  //   try {
  //     const response = await fetch(rateUrl);
  //     const data = await response.json();
  //     const rate = data.conversion_rates[currency2];
  //     console.log(rate);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   fetchCurrencyRate();
  // };

  return (
    <GlobalContext.Provider
      value={(loading, currency1, currency2, amount1, rate, isModalOpen)}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
