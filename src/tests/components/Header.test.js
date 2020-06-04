import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { startLogout } from '../../actions/auth';

test('should render the Header correctly', () => {
  const something = () => {};
  const wrapper = shallow(<Header startLogout={something} />);
  expect(wrapper).toMatchSnapshot();
  //   expect(wrapper.find('h1').length).toBe(1);
  //   expect(wrapper.find('h1').text()).toBe('Expensify!');
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   console.log(renderer.getRenderOutput());
});

//
test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

// Login Test file -> should call startLogin on button click
