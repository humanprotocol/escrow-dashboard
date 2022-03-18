import Box from "@mui/material/Box";

import Header from "./Header";
import Info from "./Info";

function Main() {
  return (
    <Box>
      <Header />
      <Box sx={{display: 'flex', justifyContent: 'right', mt: 2, mr: 2}}>
        <Info />
      </Box>
    </Box>
  );
}

export default Main;
