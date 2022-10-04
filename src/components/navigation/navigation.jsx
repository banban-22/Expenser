import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation flex flex-row justify-around mt-20 font-bold">
        <Link className="logo flex flex-row text-3xl" to="/">
          Expenser
        </Link>
        <Link className="nav-link" to="dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="currency-exchange">
          Currency Exchanger
        </Link>
        <div className="mx-10 p-4 border-black border-solid border-2 rounded-full">
          <Link className="nav-link" to="signin">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
