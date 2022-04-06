import { useState } from 'react';
import Web3 from 'web3';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export default function Search({onSetEscrow}) {
  const [escrow, setEscrow] = useState('');
  const isEscrowValid = Boolean(escrow) && Web3.utils.isAddress(escrow);
  const keyDownHandle = (e) => {
    if (e.code == "Enter") {
      if (!escrow && !isEscrowValid ) return;
      onSetEscrow(escrow);
    }
  };
  return (
    <Box sx={{width: "calc(100%)", display: "flex", flexDirection: "row", flexGrow: 4, borderRadius: "3px"}}>
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
        <IconButton type="submit" sx={{backgroundColor:'#320A8D', borderRadius:'0 3px 3px 0', color:'white', marginLeft:'-2px', cursor: 'pointer'}} aria-label="search" onClick={ keyDownHandle }>
          <SearchIcon />
        </IconButton>
    </Box>
  )
}
