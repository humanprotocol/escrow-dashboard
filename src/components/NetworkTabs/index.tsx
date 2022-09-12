import { Tab, Tabs } from '@mui/material';
import React from 'react';

// import EthereumIcon from '../icons/EthreumIcon';
import HumanIcon from '../Icons/HumanIcon';
// import NeonIcon from '../icons/NeonIcon';
import PolygonIcon from '../Icons/PolygonIcon';

const tabs = [
  { id: 'all', title: 'All Networks', icon: <HumanIcon /> },
  { id: 'polygon', title: 'Polygon', icon: <PolygonIcon /> },
  { id: 'eth-rinkeby', title: 'Ethereum Rinkeby', icon: <PolygonIcon /> },
  { id: 'neonlabs', title: 'NeonLabs', icon: <PolygonIcon /> },
];

export default function NetworkTabs() {
  return (
    <Tabs sx={{ my: '44px' }} value="all">
      {tabs.map(({ id, title, icon }) => (
        <Tab
          key={id}
          value={id}
          icon={icon}
          iconPosition="start"
          label={title}
          sx={{ textTransform: 'none' }}
        />
      ))}
    </Tabs>
  );
}
