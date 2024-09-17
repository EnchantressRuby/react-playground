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

    useEffect(() => {
        const TIME = setInterval(() => {
            setTime(moment())
        }, 1000);
    }, [])

    return (
        <div>
            {time.format("HH")}:{time.format("mm")}:{time.format("ss")}
        </div>
    )
}

export default Clock