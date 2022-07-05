import * as React from 'react';
import { Box } from '@mui/material';
import {
  ILaunchedEscrowsCard,
  LaunchedEscrowsCard,
} from './LaunchedEscrowsCard';

interface ILaunchedEscrows {
  launchedEscrows: ILaunchedEscrowsCard[];
  scanner: string;
}

export const LaunchedEscrowsView: React.FC<ILaunchedEscrows> = ({
  launchedEscrows,
  scanner,
}): React.ReactElement | null => {
  if (!scanner || !launchedEscrows) return null;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '20px auto',
      }}
    >
      {launchedEscrows.map(({ id }: ILaunchedEscrowsCard) => (
        <LaunchedEscrowsCard id={id} key={id} scanner={scanner} />
      ))}
    </Box>
  );
};
