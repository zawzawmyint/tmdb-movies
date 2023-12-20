import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useMemo } from "react";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import MoviesList from "./pages/MoviesList";
import { themeSettings } from "./theme/theme";

function App() {
  const theme = createTheme(themeSettings());
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MoviesList />
        <ScrollToTop
          smooth
          color="#fff"
          style={{
            borderRadius: 10,
            backgroundColor: theme.palette.primary.main,
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
