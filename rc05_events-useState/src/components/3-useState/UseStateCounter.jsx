//* Import needed. 
// import React from "react";
import { useState } from "react";


const UseStateCounter = () => {
    // const [counter, setCounter] = React.useState(0)
    const [counter, setCounter] = useState(0);

    const handleInc = () => setCounter(counter + 1)
    // const handleInc = () => setCounter((counter)=>counter + 1)
    // const handleInc = () => setCounter((prevState)=>prevState + 1)
    return (
        <div>
            <h2>Use State Counter</h2>
            <h3>Count:{counter}</h3>
            <button onClick={handleInc} className="btn btn-success">Increase</button>
            <button onClick={() => setCounter(0)} className="btn btn-warning">Reset</button>

            {/* arrow func needed, otherwise too many renders error, because it will run immediately */}
            <button onClick={() => setCounter(counter - 1)} className="btn btn-danger">Decrease</button>
        </div>
    )
}

export default UseStateCounter;