import * as React from 'react';
import { AppNetworkContext } from 'src/components';
import { networkMap } from 'src/constants';

export const useOnNetworkChange = () => {
  const { network, setNetwork } = React.useContext(AppNetworkContext);
  const [scannerUrl, setScannerUrl] = React.useState<string>('');
  const [escrowFactory, setEscrowFactory] = React.useState<string>(
    networkMap[network].defaultFactoryAddr
  );

  const onNetworkChange = React.useCallback(
    (networkKey: string) => {
      const validKey = networkKey.replace(/\W/g, '');
      setNetwork(validKey);
      setEscrowFactory(networkMap[network].defaultFactoryAddr);
      setScannerUrl('');
    },
    [network, setNetwork]
  );

  return {
    setEscrowFactory,
    onNetworkChange,
    setScannerUrl,
    escrowFactory,
    scannerUrl,
    network,
  };
};
