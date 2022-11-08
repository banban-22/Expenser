import React from 'react';
import AmountInput from './AmountInput';
import AmountItem from './AmountItem';
import ExpenserApp from './ExpenserApp';

// reducer
import { AmountState } from '../../context/AmountState';
import { BalanceState } from '../../context/BalanceState';

const Activities = () => {
  return (
    <>
      <BalanceState>
        <AmountState>
          <ExpenserApp />
        </AmountState>
      </BalanceState>
    </>
  );
};

export default Activities;
