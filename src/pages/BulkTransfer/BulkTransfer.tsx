import * as React from 'react';
import { useQuery } from '@apollo/client';

import { SkeletonBulkTransfer } from 'src/components/Skeletons';
import { BULK_TRANSFER_EVENTS_FULL } from 'src/queries';
import BulkTransferViews from './BulkTransferViews';

export const BulkTransfer: React.FC = (): React.ReactElement => {
  // TO-DO Makarov need to unsubscribe   // https://www.foo.software/posts/managing-data-and-state-react-hooks-recoil-and-apollo-graphql-client
  const { loading, error, data } = useQuery(BULK_TRANSFER_EVENTS_FULL);
  const { bulkTransferEvents } = data || {};

  return (
    <>
      {loading && !error && <SkeletonBulkTransfer />}
      {!loading && data && (
        <BulkTransferViews bulkTransferEvents={bulkTransferEvents} />
      )}
      {!loading && error && <div>Refresh please</div>}
    </>
  );
};
