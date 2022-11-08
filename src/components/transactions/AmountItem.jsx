import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AmountItem = (props) => {
  const { transaction, removeTransaction, formatMoney } = props;
  const sign = transaction.value > 0 ? '+' : '-';

  return (
    <>
      <div
        key={transaction.id}
        className="py-3 px-6 border-b flex flex-row justify-around"
      >
        <li className="py-3 px-6">{transaction.date}</li>
        <li className="py-3 px-6">{transaction.title}</li>
        <li className="py-3 px-6">
          {sign} {formatMoney(Math.abs(transaction.value))}
        </li>

        <div className="">
          <button className="mr-8">
            <FaEdit />
          </button>
          <button onClick={() => removeTransaction(transaction.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default AmountItem;
