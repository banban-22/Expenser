import React, { useEffect, useContext } from 'react';

// import AmountInput from './AmountInput';
import AmountItem from './AmountItem';

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
  }, [addBalance, transactions]);

  return (
    <section className="w-9/12 mx-auto">
      <table className="table-fixed text-center w-full mt-10 border-solid border-1 border-b">
        <thead className="uppercase border-b">
          <tr>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Amount</th>
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
      </table>
    </section>
  );
};

export default ExpenserApp;
