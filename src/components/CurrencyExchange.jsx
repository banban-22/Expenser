import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import CurrencyInputForm from './CurrencyInputForm';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

function CurrencyExchange() {
  const [fromCurrency, setFromCurrency] = useState('CAD');
  const [toCurrency, setToCurrency] = useState('JPY');
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
    ).then((res) => {
      setRate(res.data.conversion_rates);
    });
  }, []);

  useEffect(() => {
    if (!!rate) {
      const first = () => {
        amountChangeHandler1(1);
      };
      first();
    }
  }, [rate]);

  const numFormat = (num) => {
    return num.toFixed(2);
  };

  const currHandleChange1 = (fromCurrency) => {
    setToAmount(
      numFormat((fromAmount * rate[toCurrency]) / rate[fromCurrency])
    );
    setFromCurrency(fromCurrency);
  };

  const currHandleChange2 = (toCurrency) => {
    setFromAmount(
      numFormat((toAmount * rate[fromCurrency]) / rate[toCurrency])
    );
    setToCurrency(toCurrency);
  };

  const amountChangeHandler1 = (fromAmount) => {
    setToAmount(
      numFormat((fromAmount * rate[toCurrency]) / rate[fromCurrency])
    );
    setFromAmount(fromAmount);
  };

  const amountChangeHandler2 = (toAmount) => {
    setFromAmount(
      numFormat((toAmount * rate[fromCurrency]) / rate[toCurrency])
    );
    setToAmount(toAmount);
  };

  const currInvert = () => {
    let temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <main className="mt-20">
      {/* Currency1 */}
      <section className="flex flex-col w-full text-center justify-center">
        <div className="mb-10 flex flex-row justify-center items-center">
          <p className="font-bold text-2xl text-gray-400 mr-10">From</p>
          <CurrencyInputForm
            currencyChangeHandler={currHandleChange1}
            amountChangeHandler={amountChangeHandler1}
            currencies={Object.keys(rate)}
            amount={fromAmount}
            currency={fromCurrency}
          />
        </div>
        {/* Arrow Icon */}
        <div
          className="text-center mx-auto my-auto hover:cursor-pointer"
          onClick={currInvert}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>

        {/* To (Currency Exchange TO) */}
        <div className="mt-10 flex flex-row justify-center items-center">
          <p className="font-bold text-2xl text-gray-400 mr-20">To</p>

          <CurrencyInputForm
            currencyChangeHandler={currHandleChange2}
            amountChangeHandler={amountChangeHandler2}
            currencies={Object.keys(rate)}
            amount={toAmount}
            currency={toCurrency}
          />
        </div>
      </section>
    </main>
  );
}

export default CurrencyExchange;
