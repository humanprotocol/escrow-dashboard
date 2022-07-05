import * as React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

export interface ILaunchedEscrowsCard {
  scanner: string;
  id?: string;
  from?: string;
  eip20?: string;
}
export const LaunchedEscrowsCard: React.FC<ILaunchedEscrowsCard> = ({
  id,
  scanner,
}): React.ReactElement => {
  return (
    <Card
      sx={{
        margin: '20px 0',
        width: '1',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
      }}
    >
      <CardContent>
        {id && (
          <>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Escrow Address:
            </Typography>
            <Link
              href={`${scanner}${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {id}
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
};
