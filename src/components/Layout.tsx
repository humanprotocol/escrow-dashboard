import { Box } from '@mui/material';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <Box
    sx={{
      marginTop: '120px',
    }}
  >
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
