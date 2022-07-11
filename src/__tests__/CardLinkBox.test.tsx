import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CardLinkBox } from '../components/Cards';

const mock = {
  url: 'Url',
  text: 'TestScanner',
  header: 'All Deployed Escrows',
};

describe('when rendered CardLinkBox component', () => {
  it('should render passed prop `url`', () => {
    render(
      <CardLinkBox url={mock.url} text={mock.text} header={mock.header} />
    );
    expect(screen.findByLabelText(mock.url)).toBeTruthy();
  });

  it('should render passed prop `scanner`', () => {
    render(
      <CardLinkBox url={mock.url} text={mock.text} header={mock.header} />
    );
    expect(screen.findByLabelText(mock.scanner)).toBeTruthy();
  });

  it('should render prop `header`', () => {
    render(
      <CardLinkBox url={mock.url} text={mock.text} header={mock.header} />
    );
    expect(screen.findByLabelText(mock.header)).toBeTruthy();
  });
});

it('CardLinkBox component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(
      <CardLinkBox url={mock.url} scanner={mock.scanner} header={mock.header} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
