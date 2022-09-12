import { Box, Typography, useTheme } from '@mui/material';
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

interface IStackedBarChartProps {
  title: string;
}

export default function StackedBarChart({ title }: IStackedBarChartProps) {
  const theme = useTheme();

  return (
    <ChartWrapper>
      <Typography variant="body2" color="primary" fontWeight={600} mb="4px">
        {title}
      </Typography>
      <Typography variant="h2" color="primary">
        {numeral(4089).format('0,0')}
      </Typography>
      <Box sx={{ width: '100%', height: 190 }}>
        <ResponsiveContainer>
          <RechartsBarChart data={data} margin={{ top: 30, left: 4, right: 4 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="uv" fill={theme.palette.primary.main} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </Box>
    </ChartWrapper>
  );
}
