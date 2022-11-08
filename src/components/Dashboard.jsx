import React, { useContext, Fragment } from 'react';
import BudgetCard from './BudgetCard';
import BalanceContext from '../context/BalanceContext';
import '../index.css';

const Dashboard = () => {
  return (
    <Fragment>
      <div className="container">
        <div>
          <div className="container z-1">
            <div>
              <BudgetCard
                name="Total Expense"
                amount={1000}
                max={1500}
              ></BudgetCard>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
