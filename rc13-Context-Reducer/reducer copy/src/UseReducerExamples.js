import { useReducer } from "react";
import { reducerAA, state1 } from "./reducer";
import load from "./img/Spin-1s-200px.gif";

const UseReducerExample = () => {

  const [state, catchIt] = useReducer(
    reducerAA,

  state1
  );
  const { dog, loading, error } = state;

  const fetchDog = () => {
    //? 1. Start
    catchIt({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        //? 2. ended with success
        catchIt({ type: "SUCCESS", messages: data.message });
        console.log(data);
        
      })
      .catch(() => {
        //? 3. failed
        catchIt({ type: "FAIL", messages: "DATA CAN NOT BE FETCHED!" });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
      {loading && <img src={load} alt="" />}
    </div>
  );
};

export default UseReducerExample;

