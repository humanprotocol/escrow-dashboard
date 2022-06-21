import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Layout from 'src/components/Layout';

describe('when rendered with a `name` prop', () => {
  it('should paste it into the greetings text', () => {
    const { getByRole, getByTestId } = render(
      <Layout>
        <div role="root">
          <div data-testid="parent">
            <div data-testid="child">content</div>
          </div>
        </div>
      </Layout>
    );

    const root = getByRole('root');
    const parent = getByTestId('parent');
    const child = getByTestId('child');
    expect(root).toContainElement(parent);
    expect(parent).toContainElement(child);
    expect(child).not.toContainElement(parent); // Pass
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Layout>
        <div role="root">
          <div data-testid="parent">
            <div data-testid="child">content</div>
          </div>
        </div>
      </Layout>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
