import React, { createContext, useState } from 'react';

export const NetworkContext = createContext<{
  networkId: string;
  switchNetwork: (id: string) => void;
} | null>(null);

export const NetworkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [networkId, setNetworkId] = useState('polygon');

  const switchNetwork = (id: string) => setNetworkId(id);

  return (
    <NetworkContext.Provider value={{ networkId, switchNetwork }}>
      {children}
    </NetworkContext.Provider>
  );
};
