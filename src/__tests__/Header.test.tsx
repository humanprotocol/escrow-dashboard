import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from 'src/components/Header';

describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    render(<Header />);
    expect(
      screen.getByText(/HUMAN Escrow Factory Dashboard/)
    ).toBeInTheDocument();
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
