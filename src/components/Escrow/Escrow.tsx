import * as React from 'react';
import { useQuery } from '@apollo/client';

import { getWeb3 } from 'src/helpers';
import { ESCROW_STATS } from 'src/queries';
import { networkMap } from 'src/constants';
import { AppNetworkContext } from 'src/components/App';
import { EscrowFactoryView } from './EscrowFactoryView';

const EscrowFactoryABI = require('src/contracts/EscrowFactoryABI.json');

interface IEscrowContainer {
  escrowFactory: string;
}

export const EscrowContainer: React.FC<IEscrowContainer> = ({
  escrowFactory,
}): React.ReactElement => {
  const [latestEscrow, setLatestEscrow] = React.useState('');
  const [escrowQty, setEscrowQty] = React.useState(0);
  const { network } = React.useContext(AppNetworkContext);
  let pendingEventCount;
  let bulkTransferEventCount;
  let intermediateStorageEventCount;

  const { scanner } = networkMap[network];
  const address = networkMap[network].defaultFactoryAddr || escrowFactory;
  const { rpcUrl } = networkMap[network];

  const { data: queryResponse } = useQuery(ESCROW_STATS);
  if (queryResponse) {
    pendingEventCount = Number(
      queryResponse.escrowStatistics.pendingEventCount
    );
    bulkTransferEventCount = Number(
      queryResponse.escrowStatistics.bulkTransferEventCount
    );
    intermediateStorageEventCount = Number(
      queryResponse.escrowStatistics.intermediateStorageEventCount
    );
  }

  const eventsUrl = `${scanner}/address/${address}#events`;

  React.useEffect(() => {
    async function setupEscrowFactory() {
      try {
        const web3 = getWeb3(rpcUrl);
        const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI, address);
        const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
        setLatestEscrow(lastEscrow);

        const escrowAmount = await EscrowFactory.methods.counter().call();
        setEscrowQty(Number(escrowAmount));
      } catch (err) {
        console.error(err);
        alert('Invalid escrow factory');
      }
    }
    setupEscrowFactory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <EscrowFactoryView
      count={escrowQty}
      address={address}
      latestEscrow={latestEscrow}
      eventsUrl={eventsUrl}
      scanner={scanner}
      pendingEventCount={pendingEventCount}
      bulkTransferEventCount={bulkTransferEventCount}
      intermediateStorageEventCount={intermediateStorageEventCount}
    />
  );
};
