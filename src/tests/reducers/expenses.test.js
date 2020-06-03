import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import { act } from 'react-test-renderer';

test('should set default', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Adding an expense', () => {
  const expense = {
    id: 4,
    description: 'Milk',
    amount: 5000,
    note: 'yum',
    createdAt: 200000,
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// remove expense
test('remove expense reduser by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should not remove if not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1234',
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
///  Edit expense
test('edit an expense', () => {
  const amount = 5000;
  const updates = {
    amount,
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates,
  };
  const state = expenseReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit an expense if expense not found', () => {
  const amount = 5000;
  const updates = {
    amount,
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '123245',
    updates,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
  // expect(state[0].amount).toBe(amount);
});
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]],
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
