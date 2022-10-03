import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardTextBlock, CardLinkBox } from '../Cards';

interface IToken {
  address: string;
  scanner: string;
  transferEventCount?: number | string;
  approvalEventCount?: number | string;
  holders?: number | string;
}

function getTotal(
  transferEventCount: number | string,
  approvalEventCount: number | string
): number | string {
  if (
    typeof transferEventCount === 'string' &&
    typeof approvalEventCount === 'string'
  ) {
    return 'N/A';
  }

  return Number(transferEventCount) + Number(approvalEventCount);
}
export const TokenView: React.FC<IToken> = ({
  address,
  scanner,
  transferEventCount = 'N/A',
  approvalEventCount = 'N/A',
  holders = 'N/A',
}): React.ReactElement => {
  const totalEvents = getTotal(transferEventCount, approvalEventCount);
  const hmtUrl = `${scanner}/address/${address}`;
  return (
    <Card variant="outlined">
      <CardContent>
        <CardLinkBox url={hmtUrl} text={address} header="Token Address" />
        <CardTextBlock title="Token Transfers" value={transferEventCount} />
        <CardTextBlock title="Token Approvals" value={approvalEventCount} />
        <CardTextBlock title="Token Holders" value={holders} />
        <CardTextBlock
          title="Total Number Of Token Events"
          value={totalEvents}
        />
      </CardContent>
    </Card>
  );
};
