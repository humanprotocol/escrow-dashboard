import * as React from 'react';
import { Box, Button } from '@mui/material';
import { SkeletonLaunched } from 'src/components';
import { InfiniteScroll } from 'src/components/Scroll';
import { LaunchedEscrowsView } from './LaunchedEscrowsView';
import { useLaunchedEscrowsHook } from './hooks';

export type ILaunchedEscrows = {
  scanner: string;
};

export const LaunchedEscrows: React.FC<ILaunchedEscrows> = ({
  scanner,
}): React.ReactElement | null => {
  const {
    data,
    error,
    escrows,
    loading,
    onPressed,
    handlePress,
    loadMoreNumbers,
  } = useLaunchedEscrowsHook(scanner);

  if (!scanner) return null;

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
            <LaunchedEscrowsView launchedEscrows={escrows} scanner={scanner} />
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
