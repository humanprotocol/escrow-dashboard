import * as React from 'react';
import { Box, Button } from '@mui/material';
import { SkeletonLaunched } from 'src/components';
import { InfiniteScroll } from 'src/components/Scroll';
import { LaunchedEscrowsView } from './LaunchedEscrowsView';
import { useLaunchedEscrowsHook } from './hooks';

export const LaunchedEscrows: React.FC = (): React.ReactElement => {
  const {
    escrows,
    loading,
    error,
    data,
    handlePress,
    loadMoreNumbers,
    onPressed,
  } = useLaunchedEscrowsHook();

  return (
    <Box>
      <InfiniteScroll
        onBottomHit={loadMoreNumbers}
        onPressed={onPressed}
        isLoading={loading}
      >
        <Box
          sx={{
            width: '450px',
            margin: '0 auto',
          }}
        >
          {loading && !error && <SkeletonLaunched />}
          {!loading && data && (
            <LaunchedEscrowsView launchedEscrows={escrows} />
          )}
        </Box>
      </InfiniteScroll>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          margin: '20px auto 40px',
        }}
      >
        <Button variant="outlined" onClick={handlePress} disabled={loading}>
          Load more Escrows
        </Button>
      </Box>
    </Box>
  );
};
