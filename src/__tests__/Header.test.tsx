import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from 'src/components/Header';

global.fetch = jest.fn().mockImplementationOnce(() =>
  Promise.resolve({
    status: 400,
    json: () =>
      Promise.resolve({ success: false, error: 'Something bad happened' }),
  })
);

describe('when rendered Header component', () => {
  it('should render `text` prop', () => {
    render(<Header />);
    expect(screen.getByText(/HUMAN Website/)).toBeInTheDocument();
  });
});

it('Header component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
