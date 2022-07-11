import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { EscrowFactoryView } from 'src/components/Escrow';

const mock = {
  count: 10,
  address: '63fea823365f1c81fad234abdf5a1f43',
  latestEscrow: 'eaac4d45c3c41f449cf7c94622afacbc',
  eventsUrl: 'test.url',
  scanner: 'test-scanner',
  pendingEventCount: 1,
  bulkTransferEventCount: 1,
  intermediateStorageEventCount: 1,
};

describe('when rendered CardTextBlock component', () => {
  it('should render passed prop `count`', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
        pendingEventCount={mock.pendingEventCount}
        bulkTransferEventCount={mock.bulkTransferEventCount}
        intermediateStorageEventCount={mock.intermediateStorageEventCount}
      />
    );
    expect(screen.getByText(mock.count)).toBeInTheDocument();
  });

  it('should render passed prop `address`', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
        pendingEventCount={mock.pendingEventCount}
        bulkTransferEventCount={mock.bulkTransferEventCount}
        intermediateStorageEventCount={mock.intermediateStorageEventCount}
      />
    );
    expect(screen.findByLabelText(mock.address)).toBeTruthy();
  });

  it('should render passed prop `latestEscrow`', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
        pendingEventCount={mock.pendingEventCount}
        bulkTransferEventCount={mock.bulkTransferEventCount}
        intermediateStorageEventCount={mock.intermediateStorageEventCount}
      />
    );
    expect(screen.findByLabelText(mock.latestEscrow)).toBeTruthy();
  });

  it('should render passed prop `eventsUrl`', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
        pendingEventCount={mock.pendingEventCount}
        bulkTransferEventCount={mock.bulkTransferEventCount}
        intermediateStorageEventCount={mock.intermediateStorageEventCount}
      />
    );
    expect(screen.findByLabelText(mock.eventsUrl)).toBeTruthy();
  });

  it('should render passed prop `scanner`', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
        pendingEventCount={mock.pendingEventCount}
        bulkTransferEventCount={mock.bulkTransferEventCount}
        intermediateStorageEventCount={mock.intermediateStorageEventCount}
      />
    );
    expect(screen.findByLabelText(mock.scanner)).toBeTruthy();
  });
});

it('EscrowFactoryView component renders correctly, corresponds to the snapshot', () => {
  const tree = renderer
    .create(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
        pendingEventCount={mock.pendingEventCount}
        bulkTransferEventCount={mock.bulkTransferEventCount}
        intermediateStorageEventCount={mock.intermediateStorageEventCount}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
