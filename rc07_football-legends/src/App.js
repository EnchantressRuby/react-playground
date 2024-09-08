import Container from "react-bootstrap/Container";
import Header from "./components/header/Header";
import LegendContainer from "./components/legends/LegendContainer";


function App() {
  return (
    // <div className="container">
    //   <h1>Hello React</h1>
    // </div>
    <Container className="text-center my-5">
      <Header />
      <LegendContainer />
    </Container>
  );
}

export default App;
