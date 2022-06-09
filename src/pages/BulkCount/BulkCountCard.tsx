import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface IBulkCount {
  count: number;
}

const BulkCount: React.FC<IBulkCount> = ({ count }): React.ReactElement => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          BulkCount: {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BulkCount;
