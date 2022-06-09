import * as React from 'react';
import HmTransferCard, { IHmTransferEvent } from './HmTransferCard';

interface IBulksTransferEvents {
  bulkTransferEvents: IHmTransferEvent[];
}

const HmTransferViews: React.FC<IBulksTransferEvents> = ({
  bulkTransferEvents,
}): React.ReactElement | null => {
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
        }: IHmTransferEvent) => (
          <HmTransferCard
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

export default HmTransferViews;
