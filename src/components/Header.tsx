import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{
              paddingLeft: 2,
              paddingBottom: 2,
              paddingTop: 2,
            }}
          >
            HUMAN Escrow Factory Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
