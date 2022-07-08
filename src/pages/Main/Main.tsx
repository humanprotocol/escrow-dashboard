import * as React from 'react';
import Box from '@mui/material/Box';

import { INDENT } from 'src/ui';
import { networkMap } from 'src/constants';
import { Escrow, Token, AppNetworkContext } from 'src/components';
import NetworkSwitcher from 'src/components/NetworkSwitcher';
import Footer from 'src/components/Footer';

import './main.css';

export const Main: React.FC = (): React.ReactElement => {
  const { network, setNetwork } = React.useContext(AppNetworkContext);

  const [escrowFactory, setEscrowFactory] = React.useState(
    networkMap[network].defaultFactoryAddr
  );
  const { showTokenStats } = networkMap[network];

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
          <Box
            className="escrow-wrapper"
            sx={{
              mt: INDENT.M,
              minWidth: '350px',
            }}
          >
            <Escrow escrowFactory={escrowFactory} />
          </Box>
          {showTokenStats && (
            <Box
              className="escrow-wrapper"
              sx={{
                mt: INDENT.M,
                minWidth: '350px',
              }}
            >
              <Token />
            </Box>
          )}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
