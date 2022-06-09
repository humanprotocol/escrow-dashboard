import * as React from 'react';
import Box from '@mui/material/Box';

import { INDENT } from 'src/ui';
import NetworkSwitcher from 'src/components/NetworkSwitcher';
import Search from 'src/components/Search';
import { Escrow } from 'src/components/Escrow';
import { networkMap } from 'src/constants';
import { AppNetworkContext } from 'src/components/App';

import './main.css';

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
      <Box className="wrapper">
        <Box className="inner-wrapper">
          <NetworkSwitcher
            onNetworkChange={onNetworkChange}
            network={network}
          />
          <Search onSetEscrow={setEscrowFactory} />
          <Box
            className="escrow-wrapper"
            sx={{
              mt: INDENT.M,
            }}
          >
            <Escrow escrowFactory={escrowFactory} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
