import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
