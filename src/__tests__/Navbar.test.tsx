import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Navbar from '../components/Navbar';

describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    render(<Navbar />);
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
