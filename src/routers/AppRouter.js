import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotPage from '../components/NotPage';
import Header from '../components/Header';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
