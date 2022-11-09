import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AmountItem = (props) => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.value > 0 ? '+' : '-';

  return (
    <>
      <tr
        key={transaction.id}
        className="py-3 px-6 border-b text-center w-full"
      >
        <td className="py-3 px-6">{transaction.date}</td>
        <td className="py-3 px-6">{transaction.title}</td>
        <td className="py-3 px-6">
          {sign} {formatMoney(Math.abs(transaction.value))}
        </td>

        <div className="py-3">
          <button className="mr-8">
            <FaEdit />
          </button>
          <button onClick={() => removeTransaction(transaction.id)}>
            <FaTrash />
          </button>
        </div>
      </tr>
    </>
  );
};

export default AmountItem;
