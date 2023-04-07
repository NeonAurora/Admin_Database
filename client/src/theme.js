import { createTheme } from "@mui/material/styles";

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#4d547d",
        light: "#7a7f9d",
        dark: "#21295c",
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
      },
      secondary: {
        main: "#ffd166",
        light: "#ffe3a3",
        dark: "#cca752",
        50: "#f0f0f0",
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
      },
      background: {
        default: "#191F45",
        alt: "#21295c",
      },
    },
  });
};

export default customTheme;
