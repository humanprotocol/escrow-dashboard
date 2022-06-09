import * as React from 'react';
import BulkTransferCard, { IBulkTransferEvent } from './BulkTransferCard';

interface IBulksTransferEvents {
  bulkTransferEvents: IBulkTransferEvent[];
}

const BulkTransferViews: React.FC<IBulksTransferEvents> = ({
  bulkTransferEvents,
}): React.ReactElement | null => {
  if (!bulkTransferEvents) return null;
  return (
    <>
      {bulkTransferEvents.map(
        ({
          id,
          txId,
          block,
          escrow,
          bulkCount,
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
