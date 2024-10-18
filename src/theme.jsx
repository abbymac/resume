import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#374A67',
    },
    secondary: {
        main: '#A24936',
    },
    tertiary: {
        main: '#8D99AE'
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      color: '#f2f2f2'
    },
    h2: {
        fontSize: '1.5rem',
        color: '#F2F2F2'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '100',
      color: '#f2f2f2'
    },
    body2: {
        fontSize: '0.8rem',
        fontWeight: '100',
        color: '#F2F2F2'
      },
  },

});

export default theme;
