import Container from "@mui/material/Container"
import Products from "./pages/Products";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* reset.css */}
      <CssBaseline />
      <Container>
        <Products />
      </Container>
    </ThemeProvider>

  );
}

export default App;
