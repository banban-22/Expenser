import React, { useEffect, useContext } from 'react';

import AmountInput from './AmountInput';
import AmountItem from './AmountItem';
import Balance from './Balance';

// reducer
import AmountStateContext from '../../context/AmountStateContext';
import BalanceContext from '../../context/BalanceContext';

const ExpenserApp = () => {
  const { transactions, removeTransaction } = useContext(AmountStateContext);
  const { addBalance, formatMoney } = useContext(BalanceContext);

  useEffect(() => {
    const valueTotal = transactions.reduce((valAcc, valArr) => {
      const total = valAcc + valArr.value;
      return total;
    }, 0);
    console.log('totalValue: ', valueTotal);
    addBalance({ totalBalance: valueTotal });

    // income
    let positives = transactions.filter((item) => item.type === 'positive');

    // sum of positive values
    const sumPositives = positives.reduce((valAcc, valArr) => {
      return valAcc + valArr.value;
    }, 0);
    console.log('SumPositives:', sumPositives);

    addBalance({ income: sumPositives });

    // expense
    let negatives = transactions.filter((item) => item.type === 'negative');
    // sum of negative value
    const sumNegatives = negatives.reduce((valAcc, valArr) => {
      return valAcc + valArr.value;
    }, 0);
    console.log('SumNegatives:', sumNegatives);

    addBalance({ expense: sumNegatives });
  }, [transactions]);

  return (
    <>
      <AmountInput />
      <table className="table-fixed text-center w-full mt-10 border-solid border-1 border-b">
        <thead className="uppercase font-bold border-b border-1 border-solid">
          <tr className="hover:bg-blue-gray-300">
            <th className="py-3">Date</th>
            <th className="py-3">Category</th>
            <th className="py-3">Amount</th>
            {/* <th className="py-3 px-6">Amount in ()</th> */}
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <AmountItem
              key={transaction.id}
              transaction={transaction}
              formatMoney={formatMoney}
              removeTransaction={removeTransaction}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Balance />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenserApp;
