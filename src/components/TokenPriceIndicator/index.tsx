import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

export default function TokenPriceIndicator() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: '4px',
        overflow: 'hidden',
        background: '#f6f7fe',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          background: theme.palette.primary.main,
          fontSize: 12,
          fontWeight: 600,
          padding: '6px 12px',
        }}
      >
        HMT
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', px: '16px' }}>
        <Typography variant="caption" color="primary">
          $0.19
        </Typography>
        <Typography variant="caption" color="success.dark" ml="4px">
          (+0.01%)
        </Typography>
      </Box>
    </Box>
  );
}
