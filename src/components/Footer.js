import { useState } from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MailchimpFormContainer from "./MailchimpFormContainer";

import gitImg from '../assets/images/git.png';
import discordImg from '../assets/images/discord.png';
import inImg from '../assets/images/in.png';
import twitterImg from '../assets/images/twitter.png';

export default function Footer(props) {

  return (
    <>
      <Box sx={{paddingTop: '100px', paddingBottom: '100px'}} className='paddingX'>
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
                <MailchimpFormContainer />
                
              </Stack>
              <Stack className="footer-img-link-margin">
                <ul className="footer-img-link">
                  <li style={{marginRight: '15px', marginLeft: '0px'}}>
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
      <Box sx={{padding: '43px 60px 0px', backgroundColor:' #F6F7FE', height:' 100px'}}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: "100%",
          }}
        >
          <Box className="color--01" sx={{fontSize: '14px'}}>
            © 2021 HPF. HUMAN Protocol® is a registered trademark
          </Box>
          <Box>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            >
              <Box className="color--01" sx={{fontSize: '14px', padding:'0 60px'}}>
                <a>contact@hmt.ai</a>
              </Box>
              <Box className="color--01" sx={{fontSize: '14px'}}>
                <a>Terms and conditions</a>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
