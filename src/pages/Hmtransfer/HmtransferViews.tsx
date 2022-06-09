import * as React from 'react';
import HmtransferCard, { IHmtransferEvent } from './HmtransferCard';

interface IBulksTransferEvents {
  hmtransferEvents: IHmtransferEvent[];
}

const HmtransferViews: React.FC<IBulksTransferEvents> = ({
  hmtransferEvents,
}): React.ReactElement | null => {
  if (!hmtransferEvents) return null;
  return (
    <>
      {hmtransferEvents.map(
        ({
          id,
          to,
          from,
          txId,
          escrow,
          block,
          timestamp,
          transaction,
        }: IHmtransferEvent) => (
          <HmtransferCard
            to={to}
            id={id}
            key={id}
            from={from}
            txId={txId}
            block={block}
            escrow={escrow}
            timestamp={timestamp}
            transaction={transaction}
          />
        )
      )}
    </>
  );
};

export default HmtransferViews;
