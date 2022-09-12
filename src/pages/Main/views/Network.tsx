import { Box, Grid } from '@mui/material';
import React from 'react';
import networkSvg from 'src/assets/network.svg';
import { BarChart, StackedBarChart } from 'src/components/Charts';
import NetworkTabs from 'src/components/NetworkTabs';
import ViewTitle from 'src/components/ViewTitle';

export default function NetworkView() {
  return (
    <Box mb="120px">
      <ViewTitle title="Network" iconUrl={networkSvg} />
      <NetworkTabs />
      <Box px={2}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <StackedBarChart />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <BarChart title="BulkTransfer Events" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <BarChart title="IntermediateStorage Events" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <BarChart title="Total Number Of Escrows Events" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
