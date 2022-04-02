import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { networks } from '../constants';


export default function NetworkSwitcher({onNetworkChange, network}) {
  return (
    <Select
      id="network-select"
      value={network}
      size="small"
      sx={{
        width: "100%",
        minWidth: "200px",
        flexBasis: "30%" 
      }}
      onChange={(event) => onNetworkChange(event.target.value)}
    >
      {
        networks.map(network => 
          (<MenuItem key={network.key} value={network.key}> {network.title} </MenuItem>))
      }
    </Select>
  )
}