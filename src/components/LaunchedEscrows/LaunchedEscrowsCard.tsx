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
            <Link
              href={`${scanner}${id}`}
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Escrow Address:
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                variant="body2"
                color="text.secondary"
              >
                {id}
              </Typography>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
};
