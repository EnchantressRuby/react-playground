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
      main: "#dcad45"
    }
  },
  breakpoints:{
    values:{
      xs:0,
      sm:500,
      md:800,
      lg:1200,
      xl:1536,
      xxl:2500,
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={"xx1"}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hello MUI
        </Typography>
        <Home />
      </Container>
    </ThemeProvider>

  );
}

export default App;
