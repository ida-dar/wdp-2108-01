import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

describe('Cart', () => {
  it('renders without crashing', () => {
    shallow(<Cart />);
  });
});
