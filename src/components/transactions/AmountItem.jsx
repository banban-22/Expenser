import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AmountItem = (props) => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <>
      <tr
        key={transaction.id}
        className="py-3 px-6 border-b hover:bg-blue-gray-500"
      >
        <td className="py-3 px-6">{transaction.date}</td>
        <td className="py-3 px-6">{transaction.title}</td>
        <td className="py-3 px-6">
          {sign} {formatMoney(Math.abs(transaction.value))}
        </td>
        <td className="py-3 px-6">
          {sign} {formatMoney(Math.abs(transaction.value))}
        </td>

        <button className="mr-8">
          <FaEdit />
        </button>
        <button onClick={() => removeTransaction(transaction.id)}>
          <FaTrash />
        </button>
      </tr>
    </>
  );
};

export default AmountItem;
