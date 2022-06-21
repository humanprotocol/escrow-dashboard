/* eslint-disable jsx-a11y/aria-role */
import * as React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CardBlockWithChildren } from 'src/components';

describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    const { getByRole, getByTestId } = render(
      <CardBlockWithChildren>
        <div role="root">
          <div data-testid="parent">
            <div data-testid="child">content</div>
          </div>
        </div>
      </CardBlockWithChildren>
    );

    const root = getByRole('root');
    const parent = getByTestId('parent');
    const child = getByTestId('child');
    expect(root).toContainElement(parent);
    expect(parent).toContainElement(child);
    expect(child).not.toContainElement(parent);
  });
});

describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    const { getByText } = render(
      <CardBlockWithChildren>
        <div role="root">
          <span>Test</span>
        </div>
      </CardBlockWithChildren>
    );

    expect(getByText(/Test/)).toBeInTheDocument();
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CardBlockWithChildren>
        <div role="root">
          <span>Test</span>
        </div>
      </CardBlockWithChildren>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
