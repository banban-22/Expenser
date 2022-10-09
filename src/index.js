import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import { BudgetProvider } from './context/BudgetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        {/* <BudgetProvider>
        <App />
      </BudgetProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
