import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home/home';
import CurrencyExchange from './components/currency-exchange/currency-exchnage';
import Dashboard from './components/dashboard/dashboard';
import SignIn from './routes/sign-in/sign-in';

function App() {
  // const [budget, setBudget] = useState(0);
  // const [input, setInput] = useState('');

  /*   return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="currency-exchange" element={<CurrencyExchange />} />
      </Route>
    </Routes>
  ); */

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="currency-exchange" element={<CurrencyExchange />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
