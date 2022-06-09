import * as React from 'react';
import { FixedSizeList as List } from 'react-window';
import HmtransferCard, { IHmtransferEvent } from './HmtransferCard';

interface IBulksTransferEvents {
  hmtransferEvents: IHmtransferEvent[];
}

const HmtransferVirtualViews: React.FC<IBulksTransferEvents> = ({
  hmtransferEvents,
}): React.ReactElement | null => {
  if (!hmtransferEvents) return null;

  return (
    <List
      innerElementType="ul"
      itemCount={hmtransferEvents.length}
      itemSize={10}
      height={700}
      width={400}
    >
      {({ index }) => {
        const event = hmtransferEvents[index];
        console.log(event);
        return React.useMemo(
          () => (
            <>
              <HmtransferCard
                to={event.to}
                id={event.id}
                key={event.id}
                from={event.from}
                txId={event.txId}
                block={event.block}
                escrow={event.escrow}
                timestamp={event.timestamp}
                transaction={event.transaction}
              />
            </>
          ),
          []
        );
      }}
    </List>
  );
};

export default HmtransferVirtualViews;
