import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import useMetaMask from "../hooks/metamask";
import Button from "@mui/material/Button";

function Header() {
  const { connect, isActive, account, shouldDisable } = useMetaMask();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HUMAN JOB LAUNCHER
          </Typography>
          {!isActive ? (
            <Button
              onClick={connect}
              disabled={shouldDisable}
              variant="contained"
              size="large"
            >
              CONNECT
            </Button>
          ) : (
            <span>Connected with Wallet:{account}</span>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
