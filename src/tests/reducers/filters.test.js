import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default values ', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount ', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortby to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });

  //   expect(state).toEqual({
  //     text: '',
  //     sortBy: 'date',
  //     startDate: moment().startOf('month'),
  //     endDate: moment().endOf('month'),
  //   });
  expect(state.sortBy).toBe('date');
});
// Text filter
test('should set up text  values ', () => {
  const state = filterReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'Hello',
  });

  expect(state.text).toBe('Hello');
});

test('should set start date  ', () => {
  const startDate = moment();
  const state = filterReducer(undefined, {
    type: 'SET_START_DATE',
    startDate,
  });
  expect(state.startDate).toBe(startDate);
});
test('should set end date  ', () => {
  const endDate = moment();
  const state = filterReducer(undefined, {
    type: 'SET_END_DATE',
    endDate,
  });
  expect(state.endDate).toBe(endDate);
});
