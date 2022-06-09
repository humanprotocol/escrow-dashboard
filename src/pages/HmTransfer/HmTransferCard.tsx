import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface IHmTransferEvent {
  id: string;
  block: string;
  escrow: string;
  txId: string;
  bulkCount: string;
  timestamp: string;
  transaction: string;
}

const HmTransferCard: React.FC<IHmTransferEvent> = ({
  escrow,
  block,
  timestamp,
  transaction,
}): React.ReactElement => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          escrow: {escrow}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          timestamp: {timestamp}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          transaction: {transaction}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          block: {block}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Do something</Button>
      </CardActions>
    </Card>
  );
};

export default HmTransferCard;
