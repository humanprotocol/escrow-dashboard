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
};

describe('when rendered with a `count` prop', () => {
  // const container = render(
  //   <EscrowFactoryView
  //     count={mock.count}
  //     address={mock.address}
  //     latestEscrow={mock.latestEscrow}
  //     eventsUrl={mock.eventsUrl}
  //     scanner={mock.scanner}
  //   />
  // );
  it('should paste it into the component', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
      />
    );
    expect(screen.getByText(mock.count)).toBeInTheDocument();
  });
});

describe('when rendered with a `address` prop', () => {
  it('should paste it into the component', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
      />
    );
    expect(screen.findByLabelText(mock.address)).toBeTruthy();
  });
});

describe('when rendered with a `latestEscrow` prop', () => {
  it('should paste it into the component', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
      />
    );
    expect(screen.findByLabelText(mock.latestEscrow)).toBeTruthy();
  });
});

describe('when rendered with a `eventsUrl` prop', () => {
  it('should paste it into the component', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
      />
    );
    expect(screen.findByLabelText(mock.eventsUrl)).toBeTruthy();
  });
});

describe('when rendered with a `scanner` prop', () => {
  it('should paste it into the component', () => {
    render(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
      />
    );
    expect(screen.findByLabelText(mock.scanner)).toBeTruthy();
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <EscrowFactoryView
        count={mock.count}
        address={mock.address}
        latestEscrow={mock.latestEscrow}
        eventsUrl={mock.eventsUrl}
        scanner={mock.scanner}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
