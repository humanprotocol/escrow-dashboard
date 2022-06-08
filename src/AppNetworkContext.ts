import * as React from 'react';

export default React.createContext({
  network: 'polygon',
  // eslint-disable-next-line no-unused-vars
  setNetwork: (value: string): void => {},
});
