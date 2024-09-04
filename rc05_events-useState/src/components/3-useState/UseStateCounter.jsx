//* Import needed. 
// import React from "react";
import {useState} from "react";


const UseStateCounter = () => {
    // const [counter, setCounter] = React.useState(0)
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>Use State Counter</h2>
            <h3>Count:{counter}</h3>
        </div>
    )
}

export default UseStateCounter;