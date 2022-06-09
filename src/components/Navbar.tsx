import * as React from 'react';
import { Box, Link, Container, Menu, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

const Navbar: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="info.main"
                  underline="none"
                  variant="button"
                  sx={{ fontSize: 'large', marginLeft: '2rem' }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
