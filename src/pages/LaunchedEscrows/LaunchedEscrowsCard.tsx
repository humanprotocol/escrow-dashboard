import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ILaunchedEscrowsCard {
  id?: string;
  from?: string;
  eip20?: string;
}
export const LaunchedEscrowsCard: React.FC<ILaunchedEscrowsCard> = ({
  id,
}): React.ReactElement => {
  return (
    <Card sx={{ margin: '20px 0', width: '1', height: '110px' }}>
      <CardContent>
        {id && (
          <>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Escrow Address:
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
              {id}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};
