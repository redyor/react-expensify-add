import { createStore } from 'redux';
// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const reset = () => ({
  type: 'RESET',
});

const set = ({ count }) => ({
  type: 'SET',
  count,
});

// Reducer
// 1.Reducers are pure function
// 2.Nerver change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'SET':
      return {
        count: action.count,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
};

// Creating store
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Dispaching actions
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(decrementCount());
store.dispatch(reset());
store.dispatch(set({ count: 333 }));
store.dispatch(incrementCount());
