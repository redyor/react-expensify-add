import React from 'react';
import { shallow } from 'enzyme';
import NotPage from '../../components/NotPage';

it('Should Render not found page', () => {
  const wrapper = shallow(<NotPage />);
  expect(wrapper).toMatchSnapshot();
});
