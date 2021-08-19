import React from 'react';
import { shallow } from 'enzyme';
import BlogBox from './BlogBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<BlogBox />);
    expect(component).toBeTruthy();
  });
});
