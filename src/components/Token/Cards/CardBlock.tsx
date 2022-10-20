import { Typography } from '@mui/material';
import numeral from 'numeral';
import React from 'react';
import { CardWrapper } from 'src/components/Cards';

type CardBlockProps = {
  title: string;
  value?: number | string;
  format?: string;
};

export const CardBlock: React.FC<CardBlockProps> = ({
  title,
  value,
  format = '0,0',
}): React.ReactElement => {
  return (
    <CardWrapper>
      <Typography variant="body2" color="primary" fontWeight={600} mb="4px">
        {title}
      </Typography>
      <Typography
        variant="h2"
        color="primary"
        sx={{ fontSize: { xs: 32, md: 48, lg: 64, xl: 80 } }}
      >
        {numeral(value).format(format)}
      </Typography>
    </CardWrapper>
  );
};
