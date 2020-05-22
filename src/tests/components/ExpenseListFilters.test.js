import React from 'react';
import { shallow } from 'enzyme';
import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

it('should render filter compement correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render filter with new filter compement correctly', () => {
  console.log(altFilters);
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

it('should handle text change', () => {
  const value = 'text';
  wrapper.find('input').simulate('change', {
    target: {
      value,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('sshould sortby amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {
      value,
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

it('should sortby date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: {
      value,
    },
  });
  expect(sortByDate).toHaveBeenCalled();
});

it('should handle date change', () => {
  const startDate = moment(0).add(2, 'years');
  const endDate = moment(0).add(4, 'years');
  wrapper.find(DateRangePicker).prop('onDatesChange')({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// Chang andle date change
/// should handle date focus change

it('should handle focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
