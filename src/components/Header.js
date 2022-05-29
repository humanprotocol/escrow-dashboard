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
            HUMAN Escrow Factory Dashboard{" "}
          </Typography>
        </Toolbar>
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "center",
            alignItems: "right",
          }}
        >
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
            <div>Connected with: {account}</div>
          )}
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
