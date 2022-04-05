import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Header from "./Header";
import Escrow from "./Escrow";
import Search from "./Search";
import NetworkSwitcher from "./NetworkSwitcher";
import Footer from "./Footer";
import "./style.css";
import { networkMap } from "../constants";

function Main() {
  const [network, setNetwork] = useState("polygon");
  const [escrowFactory, setEscrowFactory] = useState(
    networkMap[network].defaultFactoryAddr
  );

  const onNetworkChange = (networkKey) => {
    setNetwork(networkKey);
    setEscrowFactory(networkMap[networkKey].defaultFactoryAddr);
    localStorage.setItem(
      "defaultAddr",
      networkMap[networkKey].defaultFactoryAddr
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100vh",
        position: "relative"
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start",
          height: "auto",
          backgroundColor: '#F0F2FC',
          paddingTop: '10px',
          paddingBottom: '50px'
        }}
      >
        <Box
          my={4}
          sx={{
            width: "calc(100% - 114px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack
            className="search-wrap"
            direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <NetworkSwitcher
              onNetworkChange={onNetworkChange}
              network={network}
            ></NetworkSwitcher>
            <Search onSetEscrow={setEscrowFactory}></Search>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start",
          height: "auto",
          marginTop: '-50px'
        }}
      >
        <Box
          sx={{
            width: "calc(100% - 114px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Escrow
              address={escrowFactory}
              scanner={networkMap[network].scanner}
              rpcUrl={networkMap[network].rpcUrl}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Main;
