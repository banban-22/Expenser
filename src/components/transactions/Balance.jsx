import React, { Fragment, useContext } from 'react';

import BalanceContext from '../../context/BalanceContext';

const Balance = () => {
  const { formatMoney, totalBalance, income, expense } =
    useContext(BalanceContext);

  return (
    <Fragment>
      <p className="font-bold text-lg">
        Total Amount: {formatMoney(totalBalance)}
      </p>

      {/* <div className="">
        <div className="">
          <h4 className="">Income</h4>
          <p className="">{formatMoney(income)}</p>
        </div>
        <div className="">
          <h4 className="">expense</h4>
          <p className="">{formatMoney(Math.abs(expense))}</p>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Balance;
