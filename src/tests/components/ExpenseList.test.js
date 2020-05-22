import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

it('should render expense list correctly', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render expense with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
