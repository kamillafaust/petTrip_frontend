import { createTheme } from "@mui/material";

const globalStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    heigth: 100%;
 }

 #root {
  min-height: 100%;
  position: relative;
}

  button, a {
    cursor: pointer;
  }
`;

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1120,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyle,
    },
  },
});

theme.typography.body1 = {
  fontSize: "14px",
  fontWeight: 700,
};

export default theme;
