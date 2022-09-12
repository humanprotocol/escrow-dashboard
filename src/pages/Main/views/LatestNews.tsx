import { Box } from '@mui/material';
import React from 'react';
import latestNewsSvg from 'src/assets/latestNews.svg';
import ViewTitle from 'src/components/ViewTitle';

export default function LatestNewsView() {
  return (
    <Box mb="120px">
      <ViewTitle title="Latest News" iconUrl={latestNewsSvg} />
    </Box>
  );
}
