import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispach, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispach(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
        // console('Saving data now dispatch?');
      })
      .catch((e) => {
        //console.log('Error', e);
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// Remove expense from firebase
export const startRemoveExpense = ({ id }) => {
  return (dispach, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispach(
          removeExpense({
            id,
          })
        );
        //  console('Remove data from database.');
      })
      .catch((e) => {
        // console.log('Error', e);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
  // console.log(id, description, note, amount, createdAt);
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        // console.log('Data Changed');
        dispatch(editExpense(id, updates));
      })
      .catch((e) => {
        //  console.log('Err : ', e);
      });
  };
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        // console.log(snapshot.val());
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        // console.log(expenses);
        dispatch(setExpenses(expenses));
      })
      .catch((e) => {
        // console.log('error fetching data', e);
      });
  };
};
