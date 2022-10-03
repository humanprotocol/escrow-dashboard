import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { TokenView } from 'src/components/Token';

const mock = {
  address: '0xc748B2A084F8eFc47E086ccdDD9b7e67aEb571BF',
  scanner: 'test-scanner',
  transferEventCount: 2034,
  approvalEventCount: 1343,
  holders: 12345,
};

describe('when rendered CardTextBlock component', () => {
  it('should render passed prop `address`', () => {
    render(
      <TokenView
        address={mock.address}
        scanner={mock.scanner}
        transferEventCount={mock.transferEventCount}
        approvalEventCount={mock.approvalEventCount}
        holders={mock.holders}
      />
    );
    expect(screen.findByLabelText(mock.address)).toBeTruthy();
  });
  it('should render passed prop `scanner`', () => {
    render(
      <TokenView
        address={mock.address}
        scanner={mock.scanner}
        transferEventCount={mock.transferEventCount}
        approvalEventCount={mock.approvalEventCount}
        holders={mock.holders}
      />
    );
    expect(screen.findByLabelText(mock.scanner)).toBeTruthy();
  });
  it('should render passed prop `transferEventCount`', () => {
    render(
      <TokenView
        address={mock.address}
        scanner={mock.scanner}
        transferEventCount={mock.transferEventCount}
        approvalEventCount={mock.approvalEventCount}
        holders={mock.holders}
      />
    );
    expect(screen.getByText(mock.transferEventCount)).toBeInTheDocument();
  });

  it('should render passed prop `approvalEventCount`', () => {
    render(
      <TokenView
        address={mock.address}
        scanner={mock.scanner}
        transferEventCount={mock.transferEventCount}
        approvalEventCount={mock.approvalEventCount}
        holders={mock.holders}
      />
    );
    expect(screen.getByText(mock.approvalEventCount)).toBeInTheDocument();
  });
  it('should render passed prop `holders`', () => {
    render(
      <TokenView
        address={mock.address}
        scanner={mock.scanner}
        transferEventCount={mock.transferEventCount}
        approvalEventCount={mock.approvalEventCount}
        holders={mock.holders}
      />
    );
    expect(screen.getByText(mock.holders)).toBeInTheDocument();
  });
});

it('TokenView component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(
      <TokenView
        address={mock.address}
        scanner={mock.scanner}
        transferEventCount={mock.scanner}
        approvalEventCount={mock.approvalEventCount}
        holders={mock.holders}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
