import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import reducer from './components/reducers/reducers';
import { GlobalContext } from './context/AmountState';

import Nav from './components/Navigation';
import Home from './components/home/home';
import CurrencyExchange from './components/CurrencyExchange';
import Dashboard from './components/Dashboard';
import SignIn from './routes/sign-in/sign-in';
import Activities from './components/Activties';

function App() {
  const initialState = {
    event: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activities" element={<Activities />} />
          <Route path="currency-exchange" element={<CurrencyExchange />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
