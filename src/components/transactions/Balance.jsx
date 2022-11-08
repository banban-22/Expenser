import React, { Fragment, useContext } from 'react';

import BalanceContext from '../../context/BalanceContext';

const Balance = () => {
  const { formatMoney, totalBalance, income, expense } =
    useContext(BalanceContext);

  return (
    <Fragment>
      <div className="balance">
        <p className="">Your Balance</p>
        <h3 className="">{formatMoney(totalBalance)}</h3>
      </div>
      <div className="">
        <div className="">
          <h4 className="">Income</h4>
          <p className="">{formatMoney(income)}</p>
        </div>
        <div className="">|</div>
        <div className="">
          <h4 className="">expense</h4>
          <p className="">{formatMoney(Math.abs(expense))}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Balance;
