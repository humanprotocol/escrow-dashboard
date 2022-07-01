import { LAUNCHED_ESCROWS } from 'src/queries';
import * as React from 'react';
import { useQuery } from '@apollo/client';

export const useLaunchedEscrowsHook = () => {
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
    if (!loading) {
      setEscrows((prev: []) => [...prev, ...launchedEscrows]);
    }
  }, [launchedEscrows, loading]);

  const [onPressed, setOnPressed] = React.useState(false);

  const loadMoreNumbers = () => {
    setPage((p) => p + 10);
    setOnPressed((prev) => !prev);
  };

  const handlePress = () => setOnPressed((prev) => !prev);

  return {
    escrows,
    loading,
    error,
    handlePress,
    loadMoreNumbers,
    onPressed,
    data,
  };
};
