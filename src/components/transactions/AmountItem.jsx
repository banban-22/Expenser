import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AmountItem = (props) => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.value > 0 ? '+' : '-';

  return (
    <section className="w-9/12 mx-auto">
      <table className="table-fixed text-center w-full mt-10 border-solid border-1 border-b">
        <thead className="uppercase border-b">
          <tr>
            <th className="py-3 px-6">No.</th>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Amount</th>
            <th className="py-3 px-6">Amount in ()</th>
          </tr>
        </thead>
      </table>

      <div className={'group-items ' + transaction.type}>
        <li>
          <span>{transaction.title}</span>
          <span>
            {sign}
            {formatMoney(Math.abs(transaction.value))}
          </span>
          <button type="button" className="mr-8">
            <FaEdit />
          </button>
          <button
            type="button"
            onClick={() => removeTransaction(transaction.id)}
          >
            <FaTrash />
          </button>
        </li>
      </div>
      {/* <tbody>
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
              <td className="py-3 px-6">{event.amount}</td>
              <td>
                <button type="button" className="mr-8">
                  <FaEdit />
                </button>
                <button type="button" onClick={deleteBtn}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody> */}
    </section>
  );
};

export default AmountItem;
