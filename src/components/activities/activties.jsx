import React, { useState, useReducer } from 'react';
import reducer from '../reducers/reducers';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Activities = () => {
  const getInitialState = () => {
    const value = 'Housing';
    return value;
  };

  const [budgetModal, setBudgetModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);

  // Edit / Remove Items
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  // const [text, setText] = useState('');
  const [amount, setAmount] = useState([]);
  const [title, setTitle] = useState(getInitialState);
  const [date, setDate] = useState('');

  // reducer
  const [state, dispatch] = useReducer(reducer, []);

  // Total Count
  const [totalAmount, setTotalAmount] = useState(0);

  const calcTotal = () => {
    const totalExpenseAmount = amount.reduce((total, amount) => {
      return total + amount;
    }, 0);

    setTotalAmount(totalExpenseAmount);
  };

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
    setAmount([]);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const editItem = (id) => {
    const specificItem = state.find((item) => item.id === state.id);
    setIsEditing(true);
    setEditID(id);
    setAmount(specificItem.amount);
  };

  const deleteBtn = ({ event }) => {
    const { id } = event;
    const DELETE_EVENT = 'DELETE_EVENT';
    dispatch({ type: DELETE_EVENT, id });
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
            type="number"
            placeholder="1,000"
            className="input focus:outline-blue"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            className="categories focus:outline-blue"
            value={title}
            onChange={titleChange}
          >
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
            <tr key={this.event.id}>
              <th className="py-3 px-6">No.</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Amount</th>
            </tr>
          </thead>
          <tbody>
            {state.map((event) => {
              return (
                <tr
                  key={event.id}
                  className="py-3 px-6 border-b hover:bg-blue-gray-500"
                >
                  <td className="py-3 px-6">{event.id}</td>
                  <td className="py-3 px-6">{event.date}</td>
                  <td className="py-3 px-6">{event.title}</td>
                  <td className="py-3 px-6">{event.amount}</td>
                  <td>
                    <button
                      type="button"
                      className="mr-8"
                      onClick={() => editItem(state.id)}
                    >
                      <FaEdit />
                    </button>
                    <button type="button" onClick={deleteBtn}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{`Total: ${totalAmount}`}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Activities;
