import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { NavLink } from 'react-router-dom';
export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify!</h1>
    <NavLink activeClassName="is-active" to="/dashboard">
      Dashboard
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>

    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchtoProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchtoProps)(Header);
