import { Box, Grid, Typography, useTheme } from '@mui/material';
import numeral from 'numeral';
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import ChartWrapper from './ChartWrapper';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarChart() {
  const theme = useTheme();

  return (
    <ChartWrapper>
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Box sx={{ width: '100%', height: 362 }}>
            <ResponsiveContainer>
              <RechartsBarChart
                data={data}
                margin={{ top: 30, left: 4, right: 4 }}
              >
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar
                  dataKey="pv"
                  stackId="a"
                  fill={theme.palette.secondary.main}
                />
                <Bar
                  dataKey="uv"
                  stackId="a"
                  fill={theme.palette.primary.main}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ px: '80px' }}>
          <Box mb="40px">
            <Typography
              variant="body2"
              color="primary"
              fontWeight={600}
              mb="4px"
            >
              Amount of Escrows
            </Typography>
            <Typography variant="h2" color="primary">
              {numeral(35845).format('0,0')}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="secondary"
              fontWeight={600}
              mb="4px"
            >
              All Escrows Pending Events
            </Typography>
            <Typography variant="h2" color="secondary">
              {numeral(31576).format('0,0')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ChartWrapper>
  );
}
