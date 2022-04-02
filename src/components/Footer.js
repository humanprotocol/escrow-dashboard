import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

export default function Escrow(props) {
  return (
    <Card
      className="footer-container"
      sx={{
        width: "100%",
        bottom: "0px",
        left: "0px",
      }}
    >
      <CardContent>
        <CardTextBlock
          value={
            <Link
              href="https://github.com/humanprotocol/hmt-escrow"
              target="_blank"
              rel="noreferrer"
            >
              HMT Escrow Source Code
            </Link>
          }
        />
      </CardContent>
    </Card>
  );
}

function CardTextBlock({ value }) {
  return (
    <Typography variant="body2" textAlign="center">
      {value}
    </Typography>
  );
}
