// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1DA1F2", // Twitter Blue
    },
    background: {
      default: "#ffffff", // Light mode background
      dark: "#15202B", // Dark mode background
    },
    text: {
      primary: "#14171A", // Dark text
      secondary: "#657786", // Lighter text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
