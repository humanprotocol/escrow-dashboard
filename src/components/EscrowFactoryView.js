import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Escrow(props) {
  const {
    count,
    address,
    latestEscrow,
    eventsUrl,
  } = props;

  return (
    <Card variant="outlined">
      <CardContent>
          <CardTextBlock title="Address" value={address} />
          <CardTextBlock title="Latest Escrow" value={latestEscrow} />
          <CardTextBlock title="Amount of jobs" value={count} />
          <Events url={eventsUrl} />
      </CardContent>
    </Card>
  );
}

function CardTextBlock({ title, value }) {
  return (
    <>
      <Divider textAlign="center" sx={{mt: 1}}>
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

function Events({url}) {
  return (
    <Box textAlign="center">
      <Divider sx={{mt: 1}}>
        <Typography variant="body2" color="text.secondary">
          All deployed escrows
        </Typography>
      </Divider>
      <Link href={url} target="_blank" rel="noreferrer" align="center">
        https://polygonscan.com
      </Link>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: 11
        }}
        >
          Each event has a payload of ERC20 token address and Escrow Address
        </Typography>
        <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: 11
        }}
        >
          Change the type of the second argument to "Address" to see an Escrow address
        </Typography>
    </Box>
  )
}