import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import logoImg from "../assets/images/logo.png";

function Header() {

  return (
    <Box className="header-container" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <img src={logoImg} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              paddingLeft: 2,
              paddingBottom: 2,
              paddingTop: 2
            }}
          >
            <span className="color--01">Escrow</span> <span className="color--03">Factory Dashboard</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
