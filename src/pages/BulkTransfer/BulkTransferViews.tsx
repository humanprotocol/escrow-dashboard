/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import BulkTransferCard, { IBulkTransferEvent } from './BulkTransferCard';

interface IBulksTransferEvents {
  bulkTransferEvents: IBulkTransferEvent[];
}

const BulkTransferViews: React.FC<IBulksTransferEvents> = ({
  bulkTransferEvents,
}) => {
  if (!bulkTransferEvents) return null;
  return (
    <>
      {bulkTransferEvents.map(
        ({
          id,
          escrow,
          bulkCount,
          txId,
          block,
          timestamp,
          transaction,
        }: IBulkTransferEvent) => (
          <BulkTransferCard
            id={id}
            key={id}
            txId={txId}
            block={block}
            escrow={escrow}
            timestamp={timestamp}
            bulkCount={bulkCount}
            transaction={transaction}
          />
        )
      )}
    </>
  );
};

export default BulkTransferViews;
