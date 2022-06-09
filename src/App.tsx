import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from 'src/routes';

import theme from './theme';
import { getClient } from './queries';
import { networkMap } from './constants/networkConstants';
import AppNetworkContext from './AppNetworkContext';
import Layout from './components/Layout';

import './App.css';

const App: React.FC = (): React.ReactElement => {
  const [network, setNetwork] = React.useState<string>('polygon');

  return (
    <AppNetworkContext.Provider value={{ network, setNetwork }}>
      <ApolloProvider client={getClient(networkMap[network].graphqlClientUrl)}>
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Routes>
                {appRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </AppNetworkContext.Provider>
  );
};

export default App;
