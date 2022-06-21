import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Search from 'src/components/Search';

const props = {
  onSetEscrow: () => {},
};

describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    render(<Search onSetEscrow={props.onSetEscrow} />);
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Search onSetEscrow={props.onSetEscrow} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
