import VisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should fileter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = VisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});
test('Should filter by Startdate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(99),
    endDate: undefined,
  };
  const result = VisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});
// should sort by end date
test('Should filter by enddate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
  };
  const result = VisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

// should sort by date
test('Should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = VisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// should sort by amount
test('Should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = VisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
