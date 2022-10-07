import { Box } from '@mui/material';
import React from 'react';
import tokenSvg from 'src/assets/token.svg';
import ViewTitle from 'src/components/ViewTitle';

export default function TokenView() {
  return (
    <Box mb="120px">
      <ViewTitle title="Token" iconUrl={tokenSvg} />
    </Box>
  );
}
