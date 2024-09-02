const Event = () => {

    //? Event handler func

    const handleClick = (event) => {
        alert("Clicked!")
        console.log(event);
    }
    
    return (
        <div>
            <h2>Events</h2>
            <button onClick={handleClick} id="myBtn" name="click" className="btn btn-primary">Click me</button>
            <button onClick={()=>alert("Deleted!")} className="btn btn-danger">Delete</button>
        </div>
    )
};

export default Event;