import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6309ff',
      light: '#616161',
      dark: '#4a148c',
    },
    info: {
      main: '#eeeeee',
      light: '#f5f5f5',
      dark: '#bdbdbd',
    },
    secondary: {
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
});

export default theme;
