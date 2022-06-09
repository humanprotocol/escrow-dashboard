import * as React from 'react';
import Web3 from 'web3';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { INDENT } from 'src/ui';

interface ISearch {
  onSetEscrow: (value: string) => void;
}

const Search: React.FC<ISearch> = ({ onSetEscrow }): React.ReactElement => {
  const [escrow, setEscrow] = React.useState('');
  const isEscrowValid = Boolean(escrow) && Web3.utils.isAddress(escrow);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', mt: INDENT.L, flexGrow: 4 }}
    >
      <TextField
        variant="outlined"
        size="small"
        label="Escrow Factory Address"
        sx={{ flexBasis: '90%', mr: 1 }}
        onChange={(e) => setEscrow(e.target.value)}
      >
        {escrow}
      </TextField>
      <Button
        variant="outlined"
        onClick={() => onSetEscrow(escrow)}
        disabled={!isEscrowValid}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
