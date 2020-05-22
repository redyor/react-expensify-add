import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';
export const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
