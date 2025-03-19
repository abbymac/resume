import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#374A67", // Dark blue
      contrastText: "#FFFFFF", // White text for contrast
    },
    secondary: {
      main: "#839073", // Rust red
      contrastText: "#F2F2F2", // White text for contrast
    },
    tertiary: {
      main: "#8D99AE", // Light gray-blue
      contrastText: "#000000", // Black text for contrast
    },
    quaternary: {
      main: "#2E4057", // Darker blue for accents
      contrastText: "#FFFFFF", // White text for contrast
    },
    background: {
      default: "#F5F7FA", // Light gray background
      paper: "#FFFFFF", // White for cards/paper
    },
    text: {
      primary: "#374A67", // Dark blue for primary text
      secondary: "#A24936", // Rust red for secondary text
    },
    regularText: {
      main: '#f2f2f2'
    }
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      color: "#f2f2f2",
    },
    h2: {
      fontSize: "1.5rem",
      color: "#f2f2f2",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "100",
      color: "#f2f2f2",
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: "100",
      color: "#f2f2f2", // Rust red
    },
  },
});

export default theme;