import * as React from 'react';
import Box from '@mui/material/Box';
import { Search, Escrow, NetworkSwitcher, Footer } from 'src/components';
import { LaunchedEscrows } from 'src/pages/LaunchedEscrows';
import { useOnNetworkChange } from 'src/hooks';
import { INDENT } from 'src/ui';

import './main.css';

export const Main: React.FC = (): React.ReactElement => {
  const { onNetworkChange, escrowFactory, setEscrowFactory, network } =
    useOnNetworkChange();

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
          <LaunchedEscrows />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
