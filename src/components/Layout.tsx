import * as React from 'react';
import { Box } from '@mui/material';
import Header from './Header';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => (
  <Box>
    <Header />
    {children}
  </Box>
);

export default Layout;
