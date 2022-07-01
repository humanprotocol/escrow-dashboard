import * as React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button } from '@mui/material';
import { SkeletonLaunched } from 'src/components';
import { LAUNCHED_ESCROWS } from 'src/queries';
import { InfiniteScroll } from 'src/components/Scroll';
import { LaunchedEscrowsView } from './LaunchedEscrowsView';

export const LaunchedEscrows: React.FC = (): React.ReactElement => {
  const [page, setPage] = React.useState(0);

  const { loading, error, data, refetch } = useQuery(LAUNCHED_ESCROWS, {
    variables: { skip: page },
  });

  React.useEffect(() => {
    refetch({ skip: page });
  }, [page, refetch]);

  const launchedEscrows = React.useMemo(
    () => data?.launchedEscrows || [],
    [data]
  );
  const [escrows, setEscrows] = React.useState(launchedEscrows || []);

  React.useEffect(() => {
    setEscrows((prev: []) => [...prev, ...launchedEscrows]);
  }, [launchedEscrows]);

  const [onCalled, setOnCalled] = React.useState(false);

  const loadMoreNumbers = () => {
    setPage((p) => p + 10);
    setOnCalled((prev) => !prev);
  };

  const hanldeCall = () => {
    setOnCalled((prev) => !prev);
  };

  return (
    <Box>
      <InfiniteScroll
        onBottomHit={loadMoreNumbers}
        onCalled={onCalled}
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
          // width: '100%',
          margin: '20px auto 40px',
        }}
      >
        <Button variant="outlined" onClick={hanldeCall} disabled={loading}>
          Load more Escrows
        </Button>
      </Box>
    </Box>
  );
};
