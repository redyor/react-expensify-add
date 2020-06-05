import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
export const ExpensesSummuary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount} </span>
          {expenseWord} totaling <span>{formatedExpensesTotal}</span>
          <div className="page-header__actions">
            <Link className="button" to="/create">
              Add Expense
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummuary);
