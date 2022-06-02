import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6309ff',
      light: '#616161',
      dark: '#4a148c',
      //TO-DO delete theme dont have this values 
      // mediumLight: '#ba68c8',
      // white: '#f5f5f5'
    },
    info: {
      main: '#eeeeee',
      light: '#f5f5f5',
      dark: '#bdbdbd'
    },
  },
});

export default theme;
