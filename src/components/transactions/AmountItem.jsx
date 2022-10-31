import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AmountItem = (props) => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <section className="w-9/12 mx-auto">
      {/* <div className={'group-items ' + transaction.type}> */}
      {/* <div>
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
      </div> */}
      <tr
        key={transaction.id}
        className="py-3 px-6 border-b hover:bg-blue-gray-500"
      >
        <td className="py-3 px-6">{transaction.id}</td>
        <td className="py-3 px-6">{transaction.date}</td>
        <td className="py-3 px-6">{transaction.title}</td>
        <td className="py-3 px-6">
          {sign} {formatMoney(Math.abs(transaction.amount))}
        </td>
        <td className="py-3 px-6">
          {sign} {formatMoney(Math.abs(transaction.amount))}
        </td>
        <td>
          <button type="button" className="mr-8">
            <FaEdit />
          </button>
          <button
            type="button"
            onClick={() => removeTransaction(transaction.id)}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    </section>
  );
};

export default AmountItem;
