import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
/*******Action Generators *****/

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
  // console.log(id, description, note, amount, createdAt);
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SORT_BY_DATE
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
// SORT_BY_AMOUNT
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SET_START_DATE
const setStartDate = (startDate = 0) => ({
  type: 'SET_START_DATE',
  startDate,
});

// SET_END_DATE
const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate,
});

// Default State
const expenseReducerDefaultState = [];

// Expense Reducer
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return state;
        }
      });
    //   const expense = state.find(({ id }) => id === action.expense.id);
    //   const { description, note, amount, createdAt } = action.expense;
    //   return {
    //     ...expense,
    //     description,
    //     amount,
    //     note,
    //     createdAt,
    //   };
    default:
      return state;
  }
};

// Filters Default
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
// Filters Reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };

    default:
      return state;
  }
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Creating store
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(VisibleExpenses);
  //console.log(store.getState());
});

store.dispatch(
  addExpense({ description: 'Rent', amount: 100000, createdAt: -21000 })
);
const expenseToEdit = store.dispatch(
  addExpense({ description: 'Guitar', amount: 500000000, createdAt: -1000 })
);

//store.dispatch(setTextFilter('Rent'));

// const expenseToRemove = store.dispatch(
//   addExpense({ description: 'Coffee', amount: 500 })
// );

// // store.dispatch(removeExpense({ id: expenseToRemove.expense.id }));
// store.dispatch(
//   editExpense(expenseToEdit.expense.id, {
//     description: 'Fondant',
//     note: 'Fromage',
//     amount: 200,
//     createdAt: 1000,
//   })
// );

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
//console.log(expenseToRemove.expense.id);

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const DemoState = {
  expenses: [
    {
      id: 'asdsadas',
      description: 'Jan Rent',
      note: 'Some notes here',
      amount: 66200,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: 'Reda Elamri',
  age: 39,
};

//console.log({ ...user, location: 'Kansas City', name: 'Zorro Leche' });
