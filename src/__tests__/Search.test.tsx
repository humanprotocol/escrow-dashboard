import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Search } from 'src/components';

const mock = {
  onSetEscrow: () => {},
};

describe('when rendered CardTextBlock component', () => {
  it('should render passed prop `onSetEscrow` function', () => {
    render(<Search onSetEscrow={mock.onSetEscrow} />);
  });
});

it('Search component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(<Search onSetEscrow={mock.onSetEscrow} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
