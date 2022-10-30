import React, { useEffect, useContext } from 'react';

import AmountInput from './AmountInput';
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
    let positives = transactions.filter((item) => item.type == 'positive');

    // negative value Sum
    const sumPositives = positives.reduce((valAcc, valArr) => {
      return valAcc + valArr.value;
    }, 0);
    console.log('SumPositives:', sumPositives);

    addBalance({ income: sumPositives });
  }, [transactions]);
};

export default ExpenserApp;
