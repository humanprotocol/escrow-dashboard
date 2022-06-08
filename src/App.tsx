import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';

import theme from './theme';
import Main from './components/Main';
import './App.css';
import { getClient } from './queries';
import { networkMap } from './constants';
import AppNetworkContext from './AppNetworkContext';

function App() {
  const [network, setNetwork] = React.useState<string>('polygon');

  return (
    <AppNetworkContext.Provider value={{ network, setNetwork }}>
      <ApolloProvider client={getClient(networkMap[network].graphqlClientUrl)}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </ApolloProvider>
    </AppNetworkContext.Provider>
  );
}

export default App;
