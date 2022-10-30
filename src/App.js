import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Navigation';
import Home from './components/home/home';
import CurrencyExchange from './components/currency-exchange/CurrencyExchange';
import Activities from './components/transactions/Activities';
import Dashboard from './components/Dashboard';
import SignIn from './routes/sign-in/sign-in';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="activities" element={<Activities />} />
        <Route path="currency-exchange" element={<CurrencyExchange />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
