import React from 'react';
import { shallow } from 'enzyme';
import Shop from './Shop';

describe('ProductList', () => {
  it('renders without crashing', () => {
    shallow(<Shop />);
  });
});
