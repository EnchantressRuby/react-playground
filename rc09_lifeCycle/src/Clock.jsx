// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);


import moment from "moment"
import { useState, useEffect } from "react"

const Clock = () => {

    const [time, setTime] = useState(moment())
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const TIME = setInterval(() => {
            setTime(moment())
        }, 1000);

        //! closing comp
        return () => {
            clearInterval(TIME)
        }
    }, [])

    //! update comp

    return (
        <div>
            {time.format("HH")}:{time.format("mm")}:{time.format("ss")}
            <h1 className="text-danger">Counter: {counter}</h1>
            <button className="btn btn-secondary"
                onClick={() => setCounter(counter + 1)}>Inc</button>
        </div>
    )
}

export default Clock