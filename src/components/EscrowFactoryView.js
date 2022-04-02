import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import {
  TableContainer,
  Table, 
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
export default function Escrow(props) {
  const { count, address, latestEscrow, eventsUrl, scanner } = props;
  const data = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <Card className="main-container">
      {/* <CardContent>
        <CardTextBlock title="Address" value={address} />
        <CardTextBlock title="Latest Escrow" value={latestEscrow} />
        <CardTextBlock title="Amount of jobs" value={count} />
      </CardContent> */}
      <Box sx={{fontSize: "18px", color: "var(--primary-text)", fontWeight: "700", padding: "15px"}}>Address: {address}</Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Latest Escrow</TableCell>
              <TableCell>Amount of jobs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data?.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{address}</TableCell>
                    <TableCell>{latestEscrow}</TableCell>
                    <TableCell>{count}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Events url={eventsUrl} scanner={scanner} />
    </Card>
  );
}

function CardTextBlock({ title, value }) {
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

function Events({ url, scanner }) {
  return (
    <Box className="table-footer">
      <Stack direction="row" alignItems="center">
        <Box mr={2}>All deployed escrows</Box>
        <Link
          className="mr-3"
          href={url}
          target="_blank"
          rel="noreferrer"
          align="center"
        >
          {scanner}
        </Link>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: 11,
        }}
      >
        Each event has a payload of ERC20 token address and Escrow Address.
        Change the type of the second argument to "Address" to see an Escrow
        address
      </Typography>
    </Box>
    // <Box textAlign="center">
    //   <Divider sx={{ mt: 1 }}>
    //     <Typography variant="body2" color="text.secondary">
    //       All deployed escrows
    //     </Typography>
    //   </Divider>
    //   <Link href={url} target="_blank" rel="noreferrer" align="center">
    //     {scanner}
    //   </Link>
    //   <Typography
    //     variant="body2"
    //     color="text.secondary"
    //     sx={{
    //       fontSize: 11,
    //     }}
    //   >
    //     Each event has a payload of ERC20 token address and Escrow Address
    //   </Typography>
    //   <Typography
    //     variant="body2"
    //     color="text.secondary"
    //     sx={{
    //       fontSize: 11,
    //     }}
    //   >
    //     Change the type of the second argument to "Address" to see an Escrow
    //     address
    //   </Typography>
    // </Box>
  );
}
