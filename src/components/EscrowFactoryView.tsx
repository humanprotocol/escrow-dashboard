import React from 'react';
import { Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface IEscrow {
  count: string;
  address: string;
  latestEscrow: string;
  eventsUrl: string;
  scanner: string;
}
export default function Escrow({
  count,
  address,
  latestEscrow,
  eventsUrl,
  scanner,
}: IEscrow) {
  return (
    <Card variant="outlined">
      <CardContent>
        <CardTextBlock title="Address" value={address} />
        <CardTextBlock title="Latest Escrow" value={latestEscrow} />
        <CardTextBlock title="Amount of jobs" value={count} />
        <Events url={eventsUrl} scanner={scanner} />
      </CardContent>
    </Card>
  );
}

interface ICardTextBlock {
  title: string;
  value: string;
}
function CardTextBlock({ title, value }: ICardTextBlock) {
  return (
    <>
      <Divider textAlign="center" sx={{ mt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Divider>
      <Typography variant="body2" textAlign="center">
        {value}
      </Typography>
    </>
  );
}
interface IEvents {
  url: string;
  scanner: string;
}

function Events({ url, scanner }: IEvents) {
  return (
    <Box textAlign="center">
      <Divider sx={{ mt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          All deployed escrows
        </Typography>
      </Divider>
      <Link href={url} target="_blank" rel="noreferrer" align="center">
        {scanner}
      </Link>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: 11,
        }}
      >
        Each event has a payload of ERC20 token address and Escrow Address
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: 11,
        }}
      >
        Change the type of the second argument to "Address" to see an Escrow
        address
      </Typography>
    </Box>
  );
}
