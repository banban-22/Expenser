import React from 'react';
import { useState, useEffect } from 'react';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

function CurrencyExchange() {
  // const [currencies, setCurrencies] = useState([]);
  const [currency1, setCurrency1] = useState([]);
  const [currency2, setCurrency2] = useState([]);
  const [amount1, setAmount1] = useState(1);
  const [rate, setRate] = useState([]);

  const fetchCurrency = async () => {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurrency1(data);
      setCurrency1([...Object.entries(data.supported_codes)]);
      setCurrency2([...Object.entries(data.supported_codes)]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCurrencyRate = async () => {
    const rateUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency1}`;
    try {
      const response = await fetch(rateUrl);
      const data = await response.json();
      const rate = data.conversion_rates[currency2];
      console.log(rate);
    } catch (error) {
      console.log(error);
    }
    fetchCurrencyRate();
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  const currHandleChange1 = (e) => {
    e.preventDefault();
  };

  const currHandleChange2 = (e) => {
    e.preventDefault();
  };

  const currInvert = (e) => {
    e.preventDefault();
    // console.log('clicked!');

    if (currArr1.value !== currArr2.value) currArr1.value = currArr2.value;
    // const {} = console.log(currArr1.value);
  };

  const amountChangeHandler1 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setAmount1(value);
  };

  const amountChangeHandler2 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  let currArr1 = Object.values(currency1);
  let currArr2 = Object.values(currency2);
  // console.log(currArr2);

  return (
    <main className="mt-20">
      {/* Currency1 */}
      <section className="flex flex-col w-full text-center justify-center">
        <div className="mb-10 flex flex-row justify-center items-center">
          <p className="font-bold text-2xl text-gray-400 mr-10">From</p>
          <select
            className="border-solid border-2 border-blue p-4 rounded-2xl bg-white focus:outline-none"
            onChange={currHandleChange1}
          >
            {currArr1.map((currency, index) => {
              return (
                <option key={index}>
                  {[...currency][1][0]} ({[...currency][1][1]})
                </option>
              );
            })}
          </select>
          <input
            type="number"
            id="amount-one"
            value={amount1}
            onChange={amountChangeHandler1}
            className="ml-20 border-b-blue border-b-2 pb-4 text-center focus:outline-none"
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

        {/* Currency2 */}
        <div className="mt-10 flex flex-row justify-center items-center">
          <p className="font-bold text-2xl text-gray-400 mr-20">To</p>
          <select
            onChange={currHandleChange2}
            className="border-solid border-2 border-blue p-4 rounded-2xl bg-white focus:outline-none"
          >
            {currArr2.map((currency, index) => {
              return (
                <option key={index}>
                  {[...currency][1][0]} ({[...currency][1][1]})
                </option>
              );
            })}
          </select>
          <input
            type="number"
            id="amount-one"
            value="1"
            onChange={amountChangeHandler2}
            className="ml-20 border-b-blue border-b-2 pb-4 text-center focus:outline-none"
          />
        </div>
      </section>
    </main>
  );
}

export default CurrencyExchange;

// const CurrencyExchanger = () => {
//   const [info, setInfo] = useState([]);
//   const [input, setInput] = useState(0);
//   const [from, setFrom] = useState('cad');
//   const [to, setTo] = useState('jpy');
//   const [options, setOptions] = useState([]);
//   const [output, setOutput] = useState(0);

//   useEffect(() => {
//     const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;

//     try {
//       const fetchData = async () => {
//         const response = await fetch(url);
//         const data = await response.json();
//       };
//     } catch (err) {
//       console.log(err);
//     }
//     setInfo(data);
//   }, [from]);

//   useEffect(() => {
//     setOptions(Object.keys(info));
//     convert();
//   }, [info]);
// };
