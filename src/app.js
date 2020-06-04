import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import 'normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// store.dispatch(
//   addExpense({ description: 'Water Bill', amount: 100000, createdAt: 100 })
// );
// store.dispatch(
//   addExpense({
//     description: 'Gaz Bill',
//     amount: 109555,
//     createdAt: 1000,
//   })
// );
// store.dispatch(
//   addExpense({
//     description: 'Rent',
//     amount: 500,
//     createdAt: 132165651,
//   })
// );

// const state = store.getState();
// const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(VisibleExpenses);

const appRoot = document.getElementById('app');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading ...</p>, appRoot);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
