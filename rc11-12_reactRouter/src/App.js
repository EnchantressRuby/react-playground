import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
