import { useState } from 'react';
import Web3 from 'web3';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Search({onSetEscrow}) {
  const [escrow, setEscrow] = useState('');
  const isEscrowValid = Boolean(escrow) && Web3.utils.isAddress(escrow);
  const keyDownHandle = (e) => {
    if (e.code == "Enter") {
      if (!escrow) return;
      onSetEscrow(escrow);
    }
  };
  return (
    <Box sx={{width: "calc(100%)", display: "flex", flexDirection: "row", flexGrow: 4}}>
      <TextField
        variant="outlined"
        size="small"
        label="Escrow Factory Address"
        sx={{width: "calc(100%)",  flexBasis: "100%"}}
        onChange={(e) => setEscrow(e.target.value)}
        onKeyDown={keyDownHandle}
        > 
          {escrow}
        </TextField>
      {/* <Button
        variant="outlined"
        onClick={() => onSetEscrow(escrow)}
        disabled={!isEscrowValid}
      >
          Search
      </Button> */}
    </Box>
  )
}
