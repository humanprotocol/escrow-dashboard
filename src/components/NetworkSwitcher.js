import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { networks } from "../constants";

export default function NetworkSwitcher({ onNetworkChange, network }) {
  return (
    <Select
      id="network-select"
      value={network}
      size="small"
      sx={{ mt: 2 }}
      onChange={(event) => onNetworkChange(event.target.value)}
    >
      {networks.map((net) => (
        <MenuItem key={net.key} value={net.key}>
          {net.title}
        </MenuItem>
      ))}
    </Select>
  );
}
