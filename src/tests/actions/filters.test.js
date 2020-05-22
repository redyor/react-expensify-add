import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('Should set the test filter', () => {
  const result = setTextFilter('Redyor');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Redyor',
  });
});
test('Should set the test filter when empty default value', () => {
  const result = setTextFilter('');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('set start date filters test filter', () => {
  const result = setStartDate(moment(1234));
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(1234),
  });
});

test('set start date filters test filter', () => {
  const result = setEndDate(moment(1234));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1234),
  });
});

test('test sort by date', () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: 'SORT_BY_DATE',
  });
});
test('test sort by amount', () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});
