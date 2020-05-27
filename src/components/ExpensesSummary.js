import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';
export const ExpensesSummuary = (props) => (
  <div>
    <p>
      Viewing {props.expenses.length}{' '}
      {props.expenses.length > 1 ? <span>expenses</span> : <span>expense</span>}{' '}
      totaling {numeral(props.total / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters),
    total: totalExpenses(state.expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummuary);
