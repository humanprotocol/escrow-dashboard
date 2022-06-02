import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";

import theme from "./theme";
import Main from "./components/Main";
import "./App.css";
import { getClient } from "./queries";
import { networkMap } from "./constants";
import AppContext from "./AppContext";


function App() {
  const [network, setNetwork] = React.useState<string>("polygon");

  return (
    <AppContext.Provider value={{ network, setNetwork }}>
      <ApolloProvider client={getClient(networkMap[network].graphqlClientUrl)}>
        <ThemeProvider theme={theme}>
          <Main />

        </ThemeProvider>
      </ApolloProvider>
    </AppContext.Provider>
  );
}

export default App;
