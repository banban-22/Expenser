import React, { useState, useEffect } from 'react';
import BudgetCard from '../BudgetCard';
import '../../index.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div>
        <div className="container z-1">
          <div>
            <BudgetCard
              name="Total Expense"
              amount={1200}
              max={1500}
            ></BudgetCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
