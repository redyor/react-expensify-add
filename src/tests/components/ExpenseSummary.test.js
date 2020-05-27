import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummuary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

it('should render properly all expenses more than 1', () => {
  const total = getExpensesTotal(expenses);
  const wrapper = shallow(
    <ExpensesSummuary expenses={expenses} total={total} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render properly 1 expense more than 1', () => {
  const total = getExpensesTotal([expenses[1]]);
  const wrapper = shallow(
    <ExpensesSummuary expenses={[expenses[1]]} total={total} />
  );
  expect(wrapper).toMatchSnapshot();
});
