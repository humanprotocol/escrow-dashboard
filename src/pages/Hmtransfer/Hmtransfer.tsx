import * as React from 'react';
import { useQuery } from '@apollo/client';

import { SkeletonHmtransfer } from 'src/components/Skeletons';
import { HMTRANSFER_EVENTS } from 'src/queries';
import HmtransferViews from './HmtransferViews';

export const Hmtransfer: React.FC = (): React.ReactElement => {
  // TO-DO Makarov need to unsubscribe   // https://www.foo.software/posts/managing-data-and-state-react-hooks-recoil-and-apollo-graphql-client
  const { loading, error, data } = useQuery(HMTRANSFER_EVENTS);
  const { hmtransferEvents } = data || {};

  return (
    <>
      {loading && !error && <SkeletonHmtransfer />}
      {!loading && data && (
        <HmtransferViews hmtransferEvents={hmtransferEvents} />
      )}
      {!loading && error && <div>Refresh please</div>}
    </>
  );
};
