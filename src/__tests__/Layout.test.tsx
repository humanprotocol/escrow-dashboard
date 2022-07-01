import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Layout } from 'src/components';

describe('when rendered Layout component', () => {
  it('should render passed `children` prop', () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid="root">
          <div data-testid="parent">
            <div data-testid="child">content</div>
          </div>
        </div>
      </Layout>
    );

    const root = getByTestId('root');
    const parent = getByTestId('parent');
    const child = getByTestId('child');
    expect(root).toContainElement(parent);
    expect(parent).toContainElement(child);
    expect(child).not.toContainElement(parent); // Pass
  });
});

it('Layout component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(
      <Layout>
        <div data-testid="root">
          <div data-testid="parent">
            <div data-testid="child">content</div>
          </div>
        </div>
      </Layout>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
