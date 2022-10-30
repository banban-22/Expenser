import React, { useState, useContext } from 'react';
import AmountStateContext from '../../context/AmountStateContext';

const AmountInput = () => {
  const { addTransaction, handleValues } = useContext(AmountStateContext);

  const [budgetModal, setBudgetModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);

  // const [amount, setAmount] = useState([]);
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');

  // const [state, dispatch] = useReducer(reducer, []);

  const addBudget = (e) => {
    e.preventDefault();
    setBudgetModal(false) || setExpenseModal(false);

    // dispatch({
    //   type: 'CREATE_EVENT',
    //   date,
    //   title,
    //   amount,
    // });

    // setDate({});
    // setTitle({});
    // setAmount([]);
  };

  // const deleteBtn = ({ event }) => {
  //   const { id } = event;
  //   const DELETE_EVENT = 'DELETE_EVENT';
  //   dispatch({ type: DELETE_EVENT, id });
  // };

  // const btnDisable = date === '' || amount === '';

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

          <form
            className="flex flex-col rounded-b-3xl"
            onSubmit={addTransaction}
          >
            <input
              type="date"
              name="date"
              // value={date}
              // onChange={(e) => setDate(e.target.value)}
              onChange={handleValues}
              className="categories border-2 border-solid  focus:outline-blue"
            />
            <input
              type="number"
              name="amount"
              placeholder="1,000"
              // value={amount}
              onChange={handleValues}
              className="input border-2 border-solid  focus:outline-blue"
            />
            <input
              type="text"
              name="title"
              placeholder="Add Category"
              // value={handleValues}
              onChange={handleValues}
              className="input border-2 border-solid focus:outline-blue"
            />
            {/* <option value="Housing">Housing</option>
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
          </input> */}
            <button
              className="modal-button hover:opacity-75 hover:translate-y-1 hover:translate-x-1"
              onClick={addBudget}
              // disabled={btnDisable}
            >
              Add
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AmountInput;
