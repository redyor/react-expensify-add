import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// console.log(expenses);

// const total = getExpensesTotal(expenses);
// console.log(total);
// console.log('TTTTTTTTTTTTTTTTTTTTTTOTAL');

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});
test('should addup a single expense ', () => {
  const total = getExpensesTotal([expenses[1]]);
  expect(total).toBe(1400);
});
test('should add up all expenses', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(6300);
});
