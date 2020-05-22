import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let onSubmitSpy, history, wrapper;

beforeEach(() => {
  onSubmitSpy = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={onSubmitSpy} history={history} />
  );
});

it('should render AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should handle unsubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
  //expect(wrapper).toMatchSnapshot();
});
