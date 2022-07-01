import * as React from 'react';
import { AppNetworkContext } from 'src/components';
import { networkMap } from 'src/constants';

export const useOnNetworkChange = () => {
  const { network, setNetwork } = React.useContext(AppNetworkContext);

  const [escrowFactory, setEscrowFactory] = React.useState(
    networkMap[network].defaultFactoryAddr
  );

  const onNetworkChange = (networkKey: string) => {
    const validKey = networkKey.replace(/\W/g, '');
    setNetwork(validKey);
    setEscrowFactory(networkMap[validKey].defaultFactoryAddr);
  };

  return { onNetworkChange, escrowFactory, setEscrowFactory, network };
};
