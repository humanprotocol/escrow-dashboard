import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { useGetTokenPrice } from 'src/hooks/useGetTokenPrice';

const Header: React.FC = (): React.ReactElement => {
  const currency = 'usd';
  const { price } = useGetTokenPrice(currency);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              color="info.main"
              sx={{
                paddingLeft: 2,
                paddingBottom: 2,
                paddingTop: 2,
              }}
            >
              HUMAN Escrow Factory Dashboard
            </Typography>
            <Typography
              variant="h6"
              component="div"
              color="info.main"
              sx={{
                paddingLeft: 2,
                paddingBottom: 2,
                paddingTop: 2,
              }}
            >
              Price : {price} $
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
