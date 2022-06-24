import * as React from 'react';
import { useQuery } from '@apollo/client';

import { getWeb3 } from 'src/helpers';
import { LAUNCHED_ESCROWS } from 'src/queries';
import { networkMap } from 'src/constants';
import { launchedEscrowsCount } from 'src/utils';
import { AppNetworkContext } from 'src/components/App';
import EscrowFactoryView from './EscrowFactoryView';

const EscrowFactoryABI = require('src/contracts/EscrowFactoryABI.json');

interface IEscrowContainer {
  escrowFactory: string;
}

export const EscrowContainer: React.FC<IEscrowContainer> = ({
  escrowFactory,
}): React.ReactElement => {
  const [latestEscrow, setLatestEscrow] = React.useState('');
  const { network } = React.useContext(AppNetworkContext);

  const { scanner } = networkMap[network];
  const address = networkMap[network].defaultFactoryAddr || escrowFactory;
  const { rpcUrl } = networkMap[network];

  const eventsUrl = `${scanner}/address/${address}#events`;
  const { data } = useQuery(LAUNCHED_ESCROWS);

  React.useEffect(() => {
    async function setupEscrow() {
      try {
        const web3 = getWeb3(rpcUrl);
        const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI, address);
        const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
        setLatestEscrow(lastEscrow);
      } catch (err) {
        console.error(err);
        alert('Invalid escrow factory');
      }
    }
    setupEscrow();
  }, [address]);

  return (
    <EscrowFactoryView
      count={launchedEscrowsCount(data)}
      address={address}
      latestEscrow={latestEscrow}
      eventsUrl={eventsUrl}
      scanner={scanner}
    />
  );
};
