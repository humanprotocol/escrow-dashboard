import {useState} from 'react';
import Box from "@mui/material/Box";

import Header from "./Header";
import Escrow from "./Escrow";
import Search from "./Search";
import Footer from "./Footer";

function Main() {
  const [escrowFactory, setEscrowFactory] = useState('0x45eBc3eAE6DA485097054ae10BA1A0f8e8c7f794');

  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center'}}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Search onSetEscrow={setEscrowFactory}></Search>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", mt: 2 }}>
            <Escrow address={escrowFactory} />
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
