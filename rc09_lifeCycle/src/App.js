import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import LifeCycleMethods from "./LifeCycleMethods";
import Clock from "./Clock";

const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="text-center mt-4 container">
      <button onClick={() => setShow(!show)} className="btn btn-danger">SHOW</button>
      {/* {show && <LifeCycleMethods />} */}
      {show && <Clock />}

    </div>
  );
}

export default App;