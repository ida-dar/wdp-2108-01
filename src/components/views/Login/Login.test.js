import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('ProductList', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});
