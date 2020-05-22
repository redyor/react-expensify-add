import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

it('Should render the expense Form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

it('Should render the expense Form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
it('Should render the error ', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

it('should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

it('should set note on textarea change ZZZ', () => {
  const value = 'New Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

it('should set amount if valid input', () => {
  const value = '23.40';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});
it('should NOT set amount if valid input', () => {
  const value = '23.40111';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});

it('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  // wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});
test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocus')).toBe(focused);
});
