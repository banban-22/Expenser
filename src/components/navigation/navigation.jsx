import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo flex flex-row text-3xl" to="/">
          Expenser
        </Link>
        <div className="mx-10 p-4 border-black border-solid border-2 rounded-full">
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
