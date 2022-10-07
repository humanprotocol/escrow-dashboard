import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import useHmtPrice from 'src/hooks/useHmtPrice';

export default function TokenPriceIndicator() {
  const theme = useTheme();
  const price = useHmtPrice();

  if (!price) return null;

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
          ${price.usd.toFixed(2)}
        </Typography>
        {price.usd_24h_change >= 0 ? (
          <Typography variant="caption" color="success.dark" ml="4px">
            (+{Math.abs(price.usd_24h_change).toFixed(2)}%)
          </Typography>
        ) : (
          <Typography variant="caption" color="error.dark" ml="4px">
            (-{Math.abs(price.usd_24h_change).toFixed(2)}%)
          </Typography>
        )}
      </Box>
    </Box>
  );
}
