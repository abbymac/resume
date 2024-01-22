import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#C5DECD',
    },
    secondary: {
        main: '#3D405B',
    },
    tertiary: {
        main: '#FFD9DA'
    }
    // Add more colors as needed
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
        fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '100'
    },
    body2: {
        fontSize: '0.8rem',
        fontWeight: '100'
      },
  },

});

export default theme;
