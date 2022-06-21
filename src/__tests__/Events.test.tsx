import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Events from '../components/Events';

const mock = {
  url: 'Url',
  scanner: 'TestScanner',
  text1: 'All deployed escrows',
  text2: 'Each event has a payload of ERC20 token address and Escrow Address',
  text3:
    'Change the type of the second argument to "Address" to see an Escrow address',
};

describe('when rendered Events component', () => {
  it('should render passed prop url', () => {
    render(<Events url={mock.url} scanner={mock.scanner} />);
    expect(screen.findByLabelText(mock.url)).toBeTruthy();
  });

  it('should render passed prop scanner', () => {
    render(<Events url={mock.url} scanner={mock.scanner} />);
    expect(screen.findByLabelText(mock.scanner)).toBeTruthy();
  });

  it('should render prop text1', () => {
    render(<Events url={mock.url} scanner={mock.scanner} />);
    expect(screen.findByLabelText(mock.text1)).toBeTruthy();
  });

  it('should render prop text2', () => {
    render(<Events url={mock.url} scanner={mock.scanner} />);
    expect(screen.findByLabelText(mock.text2)).toBeTruthy();
  });

  it('should render prop text3', () => {
    render(<Events url={mock.url} scanner={mock.scanner} />);
    expect(screen.findByLabelText(mock.text3)).toBeTruthy();
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Events url={mock.url} scanner={mock.scanner} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
