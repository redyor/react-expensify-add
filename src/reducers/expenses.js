// Expense Reducer
// Default State
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        // console.log(expense, action.id);
        if (expense.id === action.id) {
          //          console.log(expense);
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
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

export default expenseReducer;
