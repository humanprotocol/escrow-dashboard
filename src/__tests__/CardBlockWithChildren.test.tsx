/* eslint-disable jsx-a11y/aria-role */
import * as React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CardBlockWithChildren } from 'src/components';

describe('when rendered CardBlockWithChildren component', () => {
  it('should render passed `children` prop', () => {
    const { getByTestId } = render(
      <CardBlockWithChildren>
        <div data-testid="root">
          <div data-testid="parent">
            <div data-testid="child">content</div>
          </div>
        </div>
      </CardBlockWithChildren>
    );

    const root = getByTestId('root');
    const parent = getByTestId('parent');
    const child = getByTestId('child');
    expect(root).toContainElement(parent);
    expect(parent).toContainElement(child);
    expect(child).not.toContainElement(parent);
  });
});

describe('when rendered CardBlockWithChildren component with a `text` prop', () => {
  it('should render passed `children` prop with passed `Test` text prop', () => {
    const { getByText } = render(
      <CardBlockWithChildren>
        <div data-testid="root">
          <span>Test</span>
        </div>
      </CardBlockWithChildren>
    );

    expect(getByText(/Test/)).toBeInTheDocument();
  });
});

it('CardBlockWithChildren component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(
      <CardBlockWithChildren>
        <div data-testid="root">
          <span>Test</span>
        </div>
      </CardBlockWithChildren>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
