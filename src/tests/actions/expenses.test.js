import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove an expext', () => {
  const action = removeExpense({ id: '123as' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123as',
  });
});

test('should remove edit and expense', () => {
  const id = '123a';
  const updates = {
    description: 'Something',
    amount: 123,
    note: 'LALAL',
  };
  const action = editExpense(id, updates);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates,
  });
});

test('should setup add expense with provided values', () => {
  const expense = {
    description: 'Sugar',
    note: 'Sweet',
    amount: '1100',
    createdAt: 123456,
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test('should setup add expense with no values', () => {
  const expense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});
