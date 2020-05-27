import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummuary from './ExpensesSummary';
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummuary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
