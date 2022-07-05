import * as React from 'react';

import { getWeb3 } from 'src/helpers';
import { networkMap } from 'src/constants';
import { AppNetworkContext } from 'src/components';

const EscrowFactoryABI = require('src/contracts/EscrowFactoryABI.json');

export const useEscrowHook = (
  escrowFactory: string,
  setScannerUrl: (url: string) => void
) => {
  const [latestEscrow, setLatestEscrow] = React.useState<string>(' ');
  const [counter, setCounter] = React.useState<string>('0');
  const { network } = React.useContext(AppNetworkContext);

  const { scanner, scannerUrl } = networkMap[network];

  React.useEffect(() => {
    if (scannerUrl) {
      setScannerUrl(scannerUrl);
    }
  }, [scannerUrl, setScannerUrl]);

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
  }, [address, rpcUrl]);

  return { eventsUrl, latestEscrow, counter, address, scanner, scannerUrl };
};
