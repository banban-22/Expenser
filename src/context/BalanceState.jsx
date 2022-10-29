import React, { useReducer } from 'react';
import BalanceReducer from '../components/reducers/BalanceReducer';
import BalanceContext from './BalanceContext';

export const BalanceState = (props) => {
  const initialState = {
    totalBalance: 0,
    income: 0,
    expense: 0,
  };

  const [state, dispatch] = useReducer(BalanceReducer, initialState);

  const ADD_BALANCE = 'ADD_BALANCE';

  const addBalance = (value) => {
    dispatch({ type: ADD_BALANCE, payload: value });
  };

  function formatMoney(value) {
    return new Intl.NumberFormat('', {
      style: 'currency',
      currency: 'CAD',
    }).format(value);
  }

  return (
    <BalanceContext.Provider
      value={{
        totalBalance: state.totalBalance,
        income: state.income,
        expense: state.expense,
        addBalance,
        formatMoney,
      }}
    >
      {props.children}
    </BalanceContext.Provider>
  );
};
