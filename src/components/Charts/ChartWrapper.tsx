import Box from '@mui/material/Box';
import React from 'react';

export default function ChartWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        background: '#fff',
        boxShadow:
          '0px 3px 1px -2px #E9EBFA, 0px 2px 2px rgba(233, 235, 250, 0.5), 0px 1px 5px rgba(233, 235, 250, 0.2)',
        borderRadius: '16px',
        padding: '54px 60px 32px',
      }}
    >
      {children}
    </Box>
  );
}
