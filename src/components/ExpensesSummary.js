import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';
export const ExpensesSummuary = ({ expensesCount, expensesTotal }) => (
  <div>
    <p>
      Viewing {expensesCount}{' '}
      {expensesCount > 1 ? <span>expenses</span> : <span>expense</span>}
      totaling {numeral(expensesTotal / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummuary);
