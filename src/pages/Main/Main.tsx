import * as React from 'react';
import Box from '@mui/material/Box';

import { NetworkView, LatestNewsView, TokenView } from './views';

export const Main: React.FC = (): React.ReactElement => {
  return (
    <Box sx={{ px: '56px' }}>
      <Box
        sx={{
          background: '#f6f7fe',
          borderRadius: '40px',
          padding: '70px 90px',
        }}
      >
        <NetworkView />
        <LatestNewsView />
        <TokenView />
      </Box>
    </Box>
  );
};
