import { useState } from "react";
import load from "./img/Spin-1s-200px.gif";

const UseStateExample = () => {
  const [dogPic, setDog] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDog = () => {
    
     setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError("ATTENTION THERE IS AN ERROR IN THE URL");
        setLoading(false);
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
      {loading && <img src={load} alt="" />}
      {dogPic && <img src={dogPic} alt="" />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseStateExample;
