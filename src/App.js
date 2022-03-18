import { ThemeProvider } from "@mui/material/styles";
import { RecoilRoot } from "recoil";

import theme from "./theme";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
