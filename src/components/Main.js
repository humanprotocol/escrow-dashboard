import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";

import { walletState } from "../store/wallet";
import Header from "./Header";
import Info from "./Info";

function Main() {
  const [wallet] = useRecoilState(walletState);
  return (
    <Box>
      <Header />
      {wallet.isConnected &&
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mr: 2 }}>
          <Info />
        </Box>
      }
    </Box>
  );
}

export default Main;
