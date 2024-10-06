import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple, deepPurple } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    purp: {
      main: deepPurple["A200"],
      light: deepPurple["A100"]
    },
    btnColor: {
      main: "dcad45"
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={"x1"}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hello MUI
        </Typography>
        <Home />
      </Container>
    </ThemeProvider>

  );
}

export default App;
