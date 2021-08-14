import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Search />);
  });
});
