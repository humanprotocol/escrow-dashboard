import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

export default function Escrow() {
  return (
    <Card variant="outlined" sx={{ mt: 1 }}>
      <CardContent>
        <CardTextBlock>
          <Link
            href="https://github.com/humanprotocol/hmt-escrow"
            target="_blank"
            rel="noreferrer"
          >
            HMT Escrow Source Code
          </Link>
        </CardTextBlock>
      </CardContent>
    </Card>
  );
}

interface ICardTextBlock {
  children: JSX.Element;
}
function CardTextBlock({ children }: ICardTextBlock) {
  return (
    <Typography variant="body2" textAlign="center">
      {children}
    </Typography>
  );
}
