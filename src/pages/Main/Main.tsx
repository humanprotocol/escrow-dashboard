import * as React from 'react';
import Box from '@mui/material/Box';

import NetworkSwitcher from '../../components/NetworkSwitcher';
import { networkMap } from '../../constants';
import AppNetworkContext from '../../AppNetworkContext';
import Search from '../../components/Search';
import { Escrow } from '../../components/Escrow';

export const Main: React.FC = (): React.ReactElement => {
  const { network, setNetwork } = React.useContext(AppNetworkContext);

  const [escrowFactory, setEscrowFactory] = React.useState(
    networkMap[network].defaultFactoryAddr
  );

  const onNetworkChange = (networkKey: string) => {
    setNetwork(networkKey);
    setEscrowFactory(networkMap[networkKey].defaultFactoryAddr);
  };
  return (
    <Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <NetworkSwitcher
            onNetworkChange={onNetworkChange}
            network={network}
          />
          <Search onSetEscrow={setEscrowFactory} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <Escrow escrowFactory={escrowFactory} />
          </Box>
        </Box>
      </Box>
      <Box />
    </Box>
  );
};
