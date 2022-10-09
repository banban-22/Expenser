import React, { useState, useReducer } from 'react';
import reducer from '../reducers/reducers';

const Activities = () => {
  const [budgetModal, setBudgetModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);

  // const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  // reducer
  const [state, dispatch] = useReducer(reducer, []);

  const addBudget = (e) => {
    e.preventDefault();
    setBudgetModal(false) || setExpenseModal(false);

    dispatch({
      type: 'CREATE_EVENT',
      date,
      title,
      amount,
    });

    setDate('');
    setTitle('');
    setAmount('');
  };

  const deleteBtn = () => {
    const DELETE_EVENT = 'DELETE_EVENT';
    dispatch({ type: DELETE_EVENT });
  };

  const btnDisable = date === '' || amount === '';

  return (
    <div className="container">
      <header className="flex items-center justify-around ml-10 font-bold">
        <div className="btn-group flex flex-col md:flex-row md:mt-10">
          <button className="btn md:flex" onClick={() => setBudgetModal(true)}>
            Add Budget
          </button>
          <button className="btn md:flex" onClick={() => setExpenseModal(true)}>
            Add Expense
          </button>
        </div>
      </header>
      <section className="filter backdrop-blur-md">
        <div
          className={`modal-container z-10 ${
            budgetModal || expenseModal ? 'flex' : 'hidden'
          }`}
        >
          <button
            className="close-modal"
            onClick={() => setBudgetModal(false) || setExpenseModal(false)}
          >
            &times;
          </button>
          <input
            type="date"
            className="categories"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="1,000"
            className="input focus:outline-blue"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select className="categories focus:outline-blue">
            <option value="Housing">Housing</option>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Child Expense">Child Expense</option>
            <option value="Health">Health</option>
            <option value="Insurance">Insurance</option>
            <option value="Utilities">Utilities</option>
            <option value="Personal">Personal</option>
            <option value="Pets">Pets</option>
            <option value="Others">Others</option>
            <option value="Income">Income</option>
          </select>
          <button
            className="modal-button hover:opacity-75 hover:translate-y-1 hover:translate-x-1"
            onClick={addBudget}
            disabled={btnDisable}
          >
            Add
          </button>
        </div>
      </section>

      <section className="w-9/12 mx-auto">
        <table className="table-fixed text-center w-full mt-10 border-solid border-1 border-b">
          <thead className="uppercase border-b">
            <tr>
              <th className="py-3 px-6">No.</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Amount</th>
            </tr>
          </thead>
          <tbody>
            {state.map((event) => {
              return (
                <tr key={event.id} className="py-3 px-6 border-b">
                  <td className="py-3 px-6">{event.id}</td>
                  <td className="py-3 px-6">{event.date}</td>
                  <td className="py-3 px-6">{event.title}</td>
                  <td className="py-3 px-6">{event.amount}</td>
                  <td>
                    <button type="button" onClick={deleteBtn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Activities;
