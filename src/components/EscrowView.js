import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Escrow(props) {
  const {
    status,
    address,
    repOracleAddr,
    repOracleStake,
    recOracleAddr,
    recOracleStake,
    balance,
    manifestUrl,
    finalResultsUrl,
  } = props;

  return (
    <Card variant="outlined">
      <CardContent>
          <CardTextBlock title="Address" value={address} />
          <CardTextBlock title="Status" value={status} />
          <CardTextBlock title="Reputation Oracle" value={repOracleAddr} />
          <CardTextBlock title="Reputation Oracle stake(%)" value={repOracleStake} />
          <CardTextBlock title="Recording Oracle" value={recOracleAddr} />
          <CardTextBlock title="Recording Oracle stake(%)" value={recOracleStake} />
          <CardTextBlock title="Balance(HMT)" value={balance} />
          <CardTextBlock title="Manifest" value={manifestUrl} />
          <CardTextBlock title="Final Results" value={finalResultsUrl} />
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
