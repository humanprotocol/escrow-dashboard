import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from 'src/components/Header';

const MOCK_PRICES = { 'human-protocol': { usd: 23 } };
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_PRICES),
  })
);

describe('when rendered Header component', () => {
  it('should render `text` prop', () => {
    render(<Header />);
    expect(
      screen.getByText(/HUMAN Escrow Factory Dashboard/)
    ).toBeInTheDocument();
  });
});

it('Header component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
