import * as React from 'react';
import { useQuery } from '@apollo/client';

import getWeb3 from 'src/web3';
import { ESCROWFACTORIES_COUNT, ESCROWFACTORY_COUNT } from 'src/queries';
import AppContext from 'src/AppNetworkContext';
import { networkMap } from 'src/constants';
import { countEscrowFactory } from 'src/utils';
import EscrowFactoryView from './EscrowFactoryView';

const EscrowFactoryABI = require('src/contracts/EscrowFactoryABI.json');

interface IEscrowContainer {
  escrowFactory: string;
}

export const EscrowContainer: React.FC<IEscrowContainer> = ({
  escrowFactory,
}): React.ReactElement => {
  const [latestEscrow, setLatestEscrow] = React.useState('');
  const { network } = React.useContext(AppContext);

  const { scanner } = networkMap[network];
  const address = networkMap[network].defaultFactoryAddr || escrowFactory;
  const { rpcUrl } = networkMap[network];

  const eventsUrl = `${scanner}/address/${address}#events`;
  const { data } = useQuery(ESCROWFACTORIES_COUNT);

  const { data: dataFactory } = useQuery(ESCROWFACTORY_COUNT, {
    variables: { id: escrowFactory },
    skip: !escrowFactory,
  });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <EscrowFactoryView
      count={countEscrowFactory(
        dataFactory?.escrowFactory
          ? [dataFactory.escrowFactory]
          : data?.escrowFactories
      )}
      address={address}
      latestEscrow={latestEscrow}
      eventsUrl={eventsUrl}
      scanner={scanner}
    />
  );
};
