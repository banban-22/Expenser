import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AmountStateContext from './AmountStateContext';
import AmountStateReducer from '../components/reducers/AmountStateReducer';

import { ADD_EVENT, REMOVE_EVENT } from '../action.js';

export const AmountState = (props) => {
  // Initial state
  const initialState = {
    transactions: [],
  };

  // reducer
  const [state, dispatch] = useReducer(AmountStateReducer, initialState);

  const [form, handleForm] = useState({
    id: null,
    date: null,
    title: '',
    value: null,
    type: '',
  });

  const handleValues = (e) => {
    console.log([e.target.name], e.target.value);
    console.log({ ...form });
    handleForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      date: form.date,
      title: form.title,
      value: +form.value,
      type: form.value >= 0 ? 'positive' : 'negative',
    };

    dispatch({
      type: ADD_EVENT,
      payload: newTransaction,
    });
  };

  const removeTransaction = (id) => {
    dispatch({
      type: REMOVE_EVENT,
      payload: id,
    });
  };

  return (
    <AmountStateContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        removeTransaction,
        handleValues,
        form,
        handleForm,
      }}
    >
      {props.children}
    </AmountStateContext.Provider>
  );
};
