import React from 'react';
import { shallow } from 'enzyme';
import CompanyClaim from './CompanyClaim';

// bezwstydnie ukradzione ze stackoverflow: https://stackoverflow.com/a/58581010
// bez mock-a test nie przechodzil ze wzgledu na useHistory() - zwracalo undefined
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    shallow(<CompanyClaim />);
  });
});
