import React from 'react';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotPage from '../components/NotPage';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
