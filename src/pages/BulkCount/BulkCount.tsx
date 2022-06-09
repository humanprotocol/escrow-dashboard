import * as React from 'react';
import { useQuery } from '@apollo/client';

import { SkeletonBulkTransfer } from 'src/components/Skeletons';
import { BULK_COUNT } from 'src/queries';
import BulkCountView from './BulkCountView';

export const BulkCount: React.FC = (): React.ReactElement | null => {
  // TO-DO Makarov need to unsubscribe   // https://www.foo.software/posts/managing-data-and-state-react-hooks-recoil-and-apollo-graphql-client
  const { loading, error, data } = useQuery(BULK_COUNT);
  const { bulkTransferEvents } = data || {};
  if (!bulkTransferEvents) return null;

  const bulkCount = data.bulkTransferEvents.reduce((acc: any, val: any) => {
    return acc + Number(val.bulkCount);
  }, 0);

  return (
    <>
      {loading && !error && <SkeletonBulkTransfer />}
      {!loading && data && <BulkCountView bulkData={bulkCount} />}
      {!loading && error && <div>Refresh please</div>}
    </>
  );
};
