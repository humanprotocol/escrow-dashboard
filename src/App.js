import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import Main from "./components/Main";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { getClient } from "./queries";
import { networkMap } from "./constants";
import AppContext from "../src/AppContext";
import { useState } from "react";

function App() {
  const [network, setNetwork] = useState("polygon");

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
