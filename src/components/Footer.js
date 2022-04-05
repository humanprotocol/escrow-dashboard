import { useState } from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Footer(props) {
  const[email, setEmail] = useState("");
  return (
    <Box sx={{padding: '100px 60px'}}>
      <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <TextField
              variant="outlined"
              size="small"
              label="Email"
              sx={{width: "calc(100%)",  flexBasis: "100%"}}
              onChange={(e) => setEmail(e.target.value)}
            >
              {email}
            </TextField>
            <Button
              sx={{backgroundColor: '#320A8D', color: 'white', textTransform: 'capitalize'}}
            >
                Subscribe
            </Button>
          </Box>
          <Box>

          </Box>
      </Stack>
    </Box>
    // <Card
    //   className="footer-container"
    //   sx={{
    //     width: "100%",
    //     bottom: "0px",
    //     left: "0px",
    //   }}
    // >
    //   <CardContent>
    //     <CardTextBlock
    //       value={
    //         <Link
    //           href="https://github.com/humanprotocol/hmt-escrow"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           HMT Escrow Source Code
    //         </Link>
    //       }
    //     />
    //   </CardContent>
    // </Card>
  );
}

function CardTextBlock({ value }) {
  return (
    <Typography variant="body2" textAlign="center">
      {value}
    </Typography>
  );
}
