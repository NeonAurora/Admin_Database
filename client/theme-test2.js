import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#7986cb",
      dark: "#303f9f",
      600: "#your_custom_color",
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
      dark: "#c51162",
      300: "#your_custom_color",
    },
  },
});

const themeSettings = (mode) => {
  return {
    ...theme,
    palette: {
      ...theme.palette,
      mode,
    },
  };
};

export { themeSettings };
