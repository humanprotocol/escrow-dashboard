import * as React from 'react';
import { useQuery } from '@apollo/client';

import { HMTRANSFER_EVENTS } from '../../queries';
import HmTransferViews from './HmTransferViews';
import { SkeletonHmTransfer } from '../../components/Skeletons';

export const HmTransfer: React.FC = (): React.ReactElement => {
  // TO-DO Makarov need to unsubscribe   // https://www.foo.software/posts/managing-data-and-state-react-hooks-recoil-and-apollo-graphql-client
  const { loading, error, data } = useQuery(HMTRANSFER_EVENTS);
  const { bulkTransferEvents } = data || {};

  return (
    <>
      {loading && !error && <SkeletonHmTransfer />}
      {!loading && data && (
        <HmTransferViews bulkTransferEvents={bulkTransferEvents} />
      )}
      {!loading && error && <div>Refresh please</div>}
    </>
  );
};
