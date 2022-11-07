import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AmountStateContext from './AmountStateContext';
import AmountStateReducer from '../components/reducers/AmountStateReducer';

export const AmountState = (props) => {
  // Initial state
  const initialState = {
    transactions: [],
  };

  // reducer
  const [state, dispatch] = useReducer(AmountStateReducer, initialState);

  const [form, handleForm] = useState({
    id: null,
    title: '',
    date: null,
    amount: null,
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
    const CREATE_EVENT = 'CREATE_EVENT';
    const newTransaction = {
      id: uuidv4(),
      title: form.title,
      date: form.date,
      amount: Number(form.amount),
      type: form.amount >= 0 ? 'positive' : 'negative',
    };

    dispatch({
      type: CREATE_EVENT,
      payload: newTransaction,
    });

    console.log(e);
  };

  const removeTransaction = (id) => {
    const DELETE_EVENT = 'DELETE_EVENT';
    dispatch({
      type: DELETE_EVENT,
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
