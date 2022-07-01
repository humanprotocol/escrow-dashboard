import * as React from 'react';

import { getWeb3 } from 'src/helpers';
import { networkMap } from 'src/constants';
import { AppNetworkContext } from 'src/components';
import { EscrowFactoryView } from './EscrowFactoryView';

const EscrowFactoryABI = require('src/contracts/EscrowFactoryABI.json');

interface IEscrowContainer {
  escrowFactory: string;
}

export const EscrowContainer: React.FC<IEscrowContainer> = ({
  escrowFactory,
}): React.ReactElement => {
  const [latestEscrow, setLatestEscrow] = React.useState(' ');
  const [counter, setCounter] = React.useState('0');
  const { network } = React.useContext(AppNetworkContext);

  const { scanner } = networkMap[network];
  const address = networkMap[network].defaultFactoryAddr || escrowFactory;
  const { rpcUrl } = networkMap[network];

  const eventsUrl = `${scanner}/address/${address}#events`;

  React.useEffect(() => {
    async function setupEscrow() {
      try {
        const web3 = getWeb3(rpcUrl);
        const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI, address);

        const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
        setLatestEscrow(lastEscrow);

        const count = await EscrowFactory.methods.counter().call();
        setCounter(count);
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
      count={counter}
      address={address}
      latestEscrow={latestEscrow}
      eventsUrl={eventsUrl}
      scanner={scanner}
    />
  );
};
