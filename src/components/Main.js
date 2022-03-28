import {useState} from 'react';
import Box from "@mui/material/Box";

import Header from "./Header";
import Escrow from "./Escrow";
import Search from "./Search";
import NetworkSwitcher from './NetworkSwitcher';
import Footer from "./Footer";

import { networkMap } from '../constants';

function Main() {
  const [network, setNetwork] = useState('polygon');
  const [escrowFactory, setEscrowFactory] = useState(networkMap[network].defaultFactoryAddr);

  const onNetworkChange = (networkKey) => {
    setNetwork(networkKey);
    setEscrowFactory(networkMap[networkKey].defaultFactoryAddr);
  }
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center'}}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <NetworkSwitcher onNetworkChange={onNetworkChange} network={network}></NetworkSwitcher>
          <Search onSetEscrow={setEscrowFactory}></Search>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", mt: 2 }}>
            <Escrow
              address={escrowFactory}
              scanner={networkMap[network].scanner}
              rpcUrl={networkMap[network].rpcUrl}
            />
          </Box>
          <Footer />
        </Box>
      </Box>
      <Box>

      </Box>

    </Box>
  );
}

export default Main;
