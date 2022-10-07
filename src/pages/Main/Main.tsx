import * as React from 'react';
import Box from '@mui/material/Box';

import { NetworkProvider } from 'src/hooks/useNetwork';
import { NetworkView } from './views';

export const Main: React.FC = (): React.ReactElement => {
  return (
    <Box sx={{ px: 5 }}>
      <Box
        sx={{
          background: '#f6f7fe',
          borderRadius: '40px',
          padding: '70px 90px',
        }}
      >
        <NetworkProvider>
          <NetworkView />
        </NetworkProvider>
      </Box>
    </Box>
  );
};
