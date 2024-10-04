
function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <Container maxWidth={"xl"}> */}
    <Container maxWidth={"xxl"}>
      <Typography variant="h3" component="h1" gutterBottom>
        hello
      </Typography>
      <Home/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
