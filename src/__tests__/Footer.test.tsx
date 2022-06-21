import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

const mock = {
  link: 'https://github.com/humanprotocol/hmt-escrow',
  text: 'HMT Escrow Source Code',
};

describe('when rendered Footer', () => {
  it('Footer renders text and link to /https://github.com/humanprotocol/hmt-escrow', () => {
    render(<Footer />);
    expect(screen.getByText(mock.text)).toBeTruthy();
    expect(screen.getByText(mock.text).href).toBe(mock.link);
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
