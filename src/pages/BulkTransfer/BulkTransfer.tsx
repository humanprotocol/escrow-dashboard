import React from 'react';
import { useQuery } from '@apollo/client';

import { BULK_TRANSFER_EVENTS } from '../../queries';
import BulkTransferViews from './BulkTransferViews';
import SkeletonView from '../../components/Skeletons/Skeleton';

export const BulkTransfer = () => {
  // https://www.foo.software/posts/managing-data-and-state-react-hooks-recoil-and-apollo-graphql-client
  const { loading, error, data } = useQuery(BULK_TRANSFER_EVENTS);
  const { bulkTransferEvents } = data || {};

  return (
    <>
      {loading && !error && <SkeletonView />}
      {!loading && data && (
        <BulkTransferViews bulkTransferEvents={bulkTransferEvents} />
      )}
      {!loading && error && <div>Refresh please</div>}
    </>
  );
};
