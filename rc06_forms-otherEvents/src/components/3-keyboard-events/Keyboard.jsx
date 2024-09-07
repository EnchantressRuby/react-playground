import React from 'react'

const Keyboard = () => {

    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        console.log(e.key);
        if (e.key ==="Enter") {
            alert("Form submitted!")
        }
        if (e.key ==="Backspace") {
            alert("Are you sure you want to delete it?")
        }
    }

    return (
        <div className="container mt-4">
            <h2>Keyboard Events</h2>

            <input onKeyDown={handleKeyDown} type="text" className='form-control' />

            <div className="mt-3">
                <p>{ }</p>
            </div>

            <div>
                <textarea
                    className='form-control'
                    name="textarea"
                    id="area"
                    cols="30"
                    rows="10">
                </textarea>
            </div>
        </div>
    );
};

export default Keyboard;