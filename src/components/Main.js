import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";

import Header from "./Header";
import Escrow from "./Escrow";
import Search from "./Search";
import NetworkSwitcher from "./NetworkSwitcher";
import Footer from "./Footer";
import { networkMap } from "../constants";
import AppContext from "../AppNetworkContext";

function Main() {
  const { network, setNetwork } = useContext(AppContext);

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
          />
          <Search onSetEscrow={setEscrowFactory} />
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
      <Box />
    </Box>
  );
}

export default Main;
