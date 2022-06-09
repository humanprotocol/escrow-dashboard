import * as React from 'react';
import Box from '@mui/material/Box';

import { INDENT } from 'src/ui';
import NetworkSwitcher from 'src/components/NetworkSwitcher';
import Search from 'src/components/Search';
import { Escrow } from 'src/components/Escrow';
import { networkMap } from 'src/constants';
import AppNetworkContext from 'src/AppNetworkContext';

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
              mt: INDENT.M,
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
