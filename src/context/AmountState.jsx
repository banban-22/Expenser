import React, { useReducer, useState } from 'react';
import AmountStateContext from './AmountStateContext';
import AmountStateReducer from '../components/reducers/AmountStateReducer';

const AmountState = (props) => {
  // Initial state
  const initialState = {
    transactions: [],
  };

  // reducer
  const [state, dispatch] = useReducer(AmountStateReducer, initialState);

  const [form, handleForm] = useState({
    id: null,
    title: '',
    value: null,
    type: '',
    date: null,
  });

  const handleValues = (e) => {
    console.log([e.target.name], e.target.value);
    handleForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addTransaction = (e) => {
    const CREATE_EVENT = 'CREATE_EVENT';
    const newTransaction = {
      id: form.id,
      title: form.title,
      date: form.date,
      amount: Number(form.value),
      type: form.value >= 0 ? 'positive' : 'negative',
    };

    dispatch({
      type: CREATE_EVENT,
      payload: newTransaction,
    });

    e.preventDefault();
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

export default AmountState;

// // Create Context
// const GlobalContext = createContext(initialState);

// // Procider component
// const GlobalProvider = ({ children }) => {
//   // const [state, dispatch] = useReducer(reducer, initialState);
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <GlobalContext.Provider value={(loading, isModalOpen)}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// // make sure use
// export const useGlobalContext = () => {
//   return useContext(GlobalContext);
// };

// export { GlobalContext, GlobalProvider };