import { useRecoilState, useSetRecoilState } from "recoil";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import {ReactComponent as MetamaskLogo} from '../metamask.svg';
import { walletState } from "../store/wallet";
import { isPolygon } from "../constants";
import { enableWeb3, switchToPolygon, getWeb3 } from "../WalletProvider";

function Header() {
  const [wallet] = useRecoilState(walletState);
  const setWallet = useSetRecoilState(walletState);

  const onConnect = async () => {
    const web3 = getWeb3();
    await enableWeb3();

    window.ethereum.on('chainChanged', (chainChanged) => {
      setWallet(oldWallet => ({ ...oldWallet, networkChainId: chainChanged }));
    });

    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        setWallet(oldWallet => ({ ...oldWallet, address: accounts[0]}));
      } else {
        setWallet({ networkChainId: '', address: '', isConnected: false})
      }
    });

    const networkChainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    const account = (await web3.eth.getAccounts())[0];
    setWallet((oldWallet) => ({
      ...oldWallet,
      address: account,
      networkChainId,
      isConnected: true,
    }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{
              flexGrow: 1,
              paddingLeft: 2,
              paddingBottom: 2,
              paddingTop: 2,
            }}
          >
            Escrow scanner
          </Typography>
          <Button
            variant="contained"
            startIcon={<MetamaskLogo />}
            color="info"
            disabled={wallet.isConnected}
            onClick={onConnect}
          >
            Connect
          </Button>
          <Button
            variant="contained"
            color="info"
            disabled={!wallet.isConnected || isPolygon(wallet.networkChainId)}
            onClick={switchToPolygon}
            sx={{ marginLeft: "4px" }}
          >
            Switch To Polygon
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
