import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Home } from "./pages/Home";
import theme from "./styles/theme";

/**
 * Componente inicial. Este componente chama o componente Home.
 * @returns o componente retorna o componente Home e componentes de configuraçãoes de estilo global.
 */

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
