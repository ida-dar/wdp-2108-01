import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from './CategoryFilter';

describe('Component CategoryFilter', () => {
  it('should render without crashing', () => {
    const categories = [
      { id: 'bed', name: 'Bed' },
      { id: 'chair', name: 'Chair' },
      { id: 'sofa', name: 'Sofa' },
      { id: 'table', name: 'Table' },
      { id: 'dining', name: 'Dining' },
    ];

    const component = shallow(<CategoryFilter categories={categories} />);
    expect(component).toBeTruthy();
  });
});
