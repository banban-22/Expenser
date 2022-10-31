import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AmountItem = (props) => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <section className="w-9/12 mx-auto">
      <div className={'group-items ' + transaction.type}>
        <li>
          <span>{transaction.id}</span>
          <span>{transaction.date}</span>
          <span>{transaction.title}</span>
          <span>
            {sign} {formatMoney(Math.abs(transaction.amount))}
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
