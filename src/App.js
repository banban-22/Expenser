import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BudgetCard from './components/BudgetCard';
import Nav from './components/navigation/navigation';
// import SignIn from './routes/sign-in/sign-in';

function App() {
  const [budgetModal, setBudgetModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);
  const toggleBudget = () => {
    setBudgetModal(!budgetModal);
  };
  const toggleExpense = () => {
    setExpenseModal(!expenseModal);
  };

  const [budget, setBudget] = useState(0);
  const [input, setInput] = useState('');

  return (
    <div className="container">
      <header className="flex items-center justify-between mt-4 ml-10 font-bold">
        <div className="logo flex flex-row text-3xl">Expenser</div>
        <div className="btn-group flex flex-col md:flex-row md:mt-10">
          <button className="btn md:flex" onClick={toggleBudget}>
            Add Budget
          </button>
          <button className="btn md:flex" onClick={toggleExpense}>
            Add Expense
          </button>
        </div>
        <button className="mx-10 p-4 border-black border-solid border-2 rounded-full">
          Sign In
        </button>
      </header>
      {/* Modal Window */}
      {/* <Modal id="addBudget" budgetModal={budgetModal}></Modal> */}
      {/* <Modal id="addExpense" expenseModal={expenseModal}></Modal> */}
      <section className="filter backdrop-blur-md">
        <div
          className={`modal-container ${
            budgetModal || expenseModal ? 'flex' : 'hidden'
          }`}
        >
          <button className="close-modal">&times;</button>
          <input
            type="text"
            placeholder="1,000"
            className="input focus:outline-black"
          />
          <select name="" id="" className="categories focus:outline-black">
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
          <button className="modal-button hover:bg-gray-800 hover:translate-y-1 hover:translate-x-1">
            Add Budget
          </button>
        </div>
      </section>
      <div>
        {/* Budget Card */}
        {/* <BudgetCard name="Total Expense" amount={1200} max={1500}></BudgetCard> */}
        <div className="container z-1">
          <div>
            <BudgetCard
              name="Total Expense"
              amount={1200}
              max={1500}
            ></BudgetCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
