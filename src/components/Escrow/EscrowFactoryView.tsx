import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardTextBlock, CardLinkBox } from '../Cards';

interface IEscrow {
  count: number;
  address: string;
  latestEscrow: string;
  eventsUrl: string;
  scanner: string;
  pendingEventCount?: number | string;
  bulkTransferEventCount?: number | string;
  intermediateStorageEventCount?: number | string;
}

function getTotal(
  pendingEventCount: number | string,
  bulkTransferEventCount: number | string,
  intermediateStorageEventCount: number | string
): number | string {
  if (
    typeof pendingEventCount === 'string' &&
    typeof bulkTransferEventCount === 'string' &&
    typeof intermediateStorageEventCount === 'string'
  ) {
    return 'N/A';
  }

  return (
    Number(pendingEventCount) +
    Number(bulkTransferEventCount) +
    Number(intermediateStorageEventCount)
  );
}
export const EscrowFactoryView: React.FC<IEscrow> = ({
  count,
  address,
  latestEscrow,
  eventsUrl,
  scanner,
  pendingEventCount = 'N/A',
  bulkTransferEventCount = 'N/A',
  intermediateStorageEventCount = 'N/A',
}): React.ReactElement => {
  const totalEvents = getTotal(
    pendingEventCount,
    bulkTransferEventCount,
    intermediateStorageEventCount
  );
  return (
    <Card variant="outlined">
      <CardContent>
        <CardTextBlock title="Escrow Factory Address" value={address} />
        <CardTextBlock title="Latest Escrow" value={latestEscrow} />
        <CardTextBlock title="Amount Of Escrows" value={count} />
        <CardTextBlock title="Pending Events" value={pendingEventCount} />
        <CardTextBlock
          title="BulkTransfer Events"
          value={bulkTransferEventCount}
        />
        <CardTextBlock
          title="IntermediateStorage Events"
          value={intermediateStorageEventCount}
        />
        <CardTextBlock title="Total Number Of events" value={totalEvents} />
        <CardLinkBox
          url={eventsUrl}
          text={scanner}
          header="All Launched Escrows"
        />
      </CardContent>
    </Card>
  );
};
