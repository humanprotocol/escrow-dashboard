import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Header from "./Header";
import Escrow from "./Escrow";
import Search from "./Search";
import NetworkSwitcher from "./NetworkSwitcher";
import Footer from "./Footer";
import useMetaMask from "../hooks/metamask";
import { networkMap } from "../constants";
import AppContext from "../AppContext";

function Main() {
  const { network, setNetwork } = useContext(AppContext);
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();
  const [escrowFactory, setEscrowFactory] = useState(
    networkMap[network].defaultFactoryAddr
  );

  const onNetworkChange = (networkKey) => {
    setNetwork(networkKey);
    setEscrowFactory(networkMap[networkKey].defaultFactoryAddr);
  };
  return (
    <Box>
      <Header />

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <NetworkSwitcher
            onNetworkChange={onNetworkChange}
            network={network}
          ></NetworkSwitcher>
          <Search onSetEscrow={setEscrowFactory}></Search>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Escrow escrowFactory={escrowFactory} />
          </Box>
          <Footer />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Main;
