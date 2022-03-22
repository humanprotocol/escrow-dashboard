import { useState } from 'react';
import Web3 from 'web3';
import {useRecoilState} from 'recoil';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { escrowAddressState } from '../store/escrow';

export default function Search() {
  const [escrow, setEscrow] = useState('');
  const setGlobalEscrow = useRecoilState(escrowAddressState)[1];
  const isEscrowValid = Boolean(escrow) && Web3.utils.isAddress(escrow);

  return (
    <Box sx={{display: "flex", flexDirection: "row", mt: 3, flexGrow: 4}}>
      <TextField
        variant="outlined"
        size="small"
        label="Escrow Address"
        sx={{flexBasis: "90%", mr: 1}}
        onChange={(e) => setEscrow(e.target.value)}
        > 
          {escrow}
        </TextField>
      <Button
        variant="outlined"
        onClick={() => setGlobalEscrow(escrow)}
        disabled={!isEscrowValid}
      >
          Search
      </Button>
    </Box>
  )
}