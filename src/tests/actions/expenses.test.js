import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  console.log(expenseData);

  database
    .ref('expenses')
    .set(expenseData)
    .then(() => done());
});
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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This is better',
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      // expect(1).toBe(1);
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);

      done();
    });
});

test('should add expense with default to database and store', (done) => {
  const store = createMockStore({});
  const DefaultexpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      // expect(1).toBe(1);
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...DefaultexpenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(DefaultexpenseData);

      done();
    });
});

test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch all expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});

test('should remove expenses from firebase', (done) => {
  const id = expenses[2].id;
  const store = createMockStore({});
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      console.log(actions[0]);
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });

      return database.ref(`expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

// test('should setup add expense with no values', () => {
//   const expense = {
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0,
//   };
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expense,
//       id: expect.any(String),
//     },
//   });
// });
