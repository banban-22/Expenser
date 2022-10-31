import { React, useState } from 'react';
import { currFormatter } from './util';
import { Progress } from '@material-tailwind/react';
import MyComponent from './Chart';

// Reducer
import BalanceContext from '../context/BalanceContext';

export default function BudgetCard({ name, amount, max, progressPercent }) {
  progressPercent = +parseFloat((amount / max) * 100).toFixed(0);
  //   const [input, setInput] = useState(0);

  return (
    <section>
      <div className="card-body bg-white">
        <div className="budget-card">
          <div className="text-3xl bg-white">{name}</div>
          <div className="bg-white">
            <span className="text-2xl bg-white">
              {currFormatter.format(amount)}
            </span>
            <span className="text-slate-700 bg-white">
              / {currFormatter.format(max)}
            </span>
          </div>
        </div>
        <div className="flex w-10/12 align-center mx-auto rounded-full">
          <Progress
            className="rounded-full align-center"
            color={`${
              progressPercent < 50
                ? 'blue'
                : progressPercent < 75
                ? 'yellow'
                : 'red'
            }`}
            value={progressPercent}
            label="Completed"
          />
        </div>
        <MyComponent />
      </div>
    </section>
  );
}
