import React, { useState, useContext } from 'react';
import AmountStateContext from '../../context/AmountStateContext';

const AmountInput = () => {
  const { addTransaction, handleValues } = useContext(AmountStateContext);

  const [budgetModal, setBudgetModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);

  // const addBudget = (e) => {
  //   e.preventDefault();
  //   setBudgetModal(false) || setExpenseModal(false);
  // };

  return (
    <div className="container">
      <header className="flex items-center justify-around ml-10 font-bold">
        <div className="btn-group flex flex-col md:flex-row md:mt-10">
          <button className="btn md:flex" onClick={() => setBudgetModal(true)}>
            Add Transaction
          </button>
          {/* <button className="btn md:flex" onClick={() => setExpenseModal(true)}>
            Add Expense
          </button> */}
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
              onChange={handleValues}
              className="categories border-2 border-solid  focus:outline-blue"
            />
            <input
              type="number"
              name="value"
              placeholder="1,000"
              onChange={handleValues}
              className="input border-2 border-solid  focus:outline-blue"
            />
            <input
              type="text"
              name="title"
              placeholder="Add Category"
              onChange={handleValues}
              className="input border-2 border-solid focus:outline-blue"
            />
            <input
              type="submit"
              className="modal-button hover:cursor-pointer hover:opacity-75 hover:translate-y-1 hover:translate-x-1"
              value="Add"
              onClick={() => setBudgetModal(false) || setExpenseModal(false)}
            />
            {/* <button
              onClick={addTransaction}
              // disabled={btnDisable}
            >
              Add
            </button> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default AmountInput;
