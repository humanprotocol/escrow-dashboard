import { useState } from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import gitImg from '../assets/images/git.png';
import discordImg from '../assets/images/discord.png';
import inImg from '../assets/images/in.png';
import twitterImg from '../assets/images/twitter.png';

export default function Footer(props) {
  const[email, setEmail] = useState("");
  return (
    <Box sx={{padding: '100px 60px'}}>
      <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          spacing={2}
          justifyContent="space-between"
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={2}
              sx={{
                width: "100%",
              }}
            >
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
                sx={{backgroundColor: '#320A8D', color: 'white', textTransform: 'capitalize', padding:'0 50px', marginLeft: '20px'}}
              >
                  Subscribe
              </Button>
            </Stack>
            <Stack>
              <ul className="footer-img-link">
                <li style={{marginRight: '20px', marginLeft: '0px'}}>
                  <a href="https://" target="_blank">
                    <img src={gitImg} />
                  </a>
                </li>
                <li>
                  <a href="https://" target="_blank">
                    <img src={discordImg}/>
                  </a>
                </li>
                <li>
                  <a href="https://" target="_blank">
                    <img src={twitterImg}/>
                  </a>
                </li>
                <li>
                  <a href="https://" target="_blank">
                    <img src={inImg}/>
                  </a>
                </li>
              </ul>
            </Stack>
          </Box>
          <Box>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={2}
              sx={{
                width: "100%"
              }}
            >
              <ul className="footer-text-link">
                <li>
                  <a>
                    Lightpaper
                  </a>
                </li>
                <li>
                  <a>
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a>
                    AI Whitepater
                  </a>
                </li>
                <li>
                  <a>
                    Token
                  </a>
                </li>
              </ul>

              <ul className="footer-text-link">
                <li>
                  <a>
                    Technology
                  </a>
                </li>
                <li>
                  <a>
                    Developers
                  </a>
                </li>
                <li>
                  <a>
                    GitHub
                  </a>
                </li>
                <li>
                  <a>
                    Blog
                  </a>
                </li>
              </ul>

              <ul className="footer-text-link">
                <li>
                  <a>
                    Ambassador Hub
                  </a>
                </li>
                <li>
                  <a>
                    Brand Assets
                  </a>
                </li>
                <li>
                  <a>
                    Team
                  </a>
                </li>
                <li>
                  <a>
                    Carreers
                  </a>
                </li>
              </ul>

            </Stack>
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
