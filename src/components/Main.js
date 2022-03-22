import { useRecoilState } from "recoil";
import Box from "@mui/material/Box";

import { walletState } from "../store/wallet";
import Header from "./Header";
import Info from "./Info";
import Escrow from "./Escrow";
import Search from "./Search";

function Main() {
  const [wallet] = useRecoilState(walletState);
  return (
    <Box>
      <Header />
      {wallet.isConnected &&
        <Box sx={{ display: "flex", justifyContent: "center"}}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Search></Search>
            <Box sx={{ 
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mt: 2
            }}>
              <Info />
              <Escrow />
          </Box>
        </Box>
      </Box>
      }

    </Box>
  );
}

export default Main;
