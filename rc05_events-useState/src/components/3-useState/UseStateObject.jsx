import {useState} from "react";

const UseStateObject = () => {
    const [name, setName] = useState("Ruby");
  return (
    <div>
        <h1>Use State Object</h1>
        <h2>Name: {name}</h2>
    </div>
  );
};

export default UseStateObject;