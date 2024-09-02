const Event = () => {
    //?local variable
    let message = "Bye bye!";
    
    //? Event handler func

    const handleClick = (event) => {
        alert("Clicked!")
        console.log(event);
    }

    function handleExt(msg) {
        console.log(msg);
    }

    const handleChng = () => {
        message = "Hello Friends";
        console.log(message);
        //! Direct DOM intervention is not preferred in React
        // document.querySelector("p").textContent = message;
    };

    return (
        <div>
            <h2>Events</h2>
            <button onClick={handleClick} id="myBtn" name="click" className="btn btn-primary">Click me</button>
            <button onClick={() => alert("Deleted!")} className="btn btn-danger">Delete</button>
            {/* <button onClick={() => handleExt("Bye!")} className="btn btn-success">Exit</button> */}
            <button onClick={() => handleExt(message)} className="btn btn-success">Exit</button>
            <button onClick={handleChng} className="btn btn-warning">Change</button>
            <p>{message}</p>
        </div>
    )
};

export default Event;