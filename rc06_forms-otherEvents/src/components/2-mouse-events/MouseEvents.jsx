import React, { useState } from 'react'

const MouseEvents = () => {
  const [visible, setVisible] = useState(false);
  const handleDoubleClick = (e) => e.target.classList.toggle("bg-danger");
  const [coordX, setCoordX] = useState("")
  const [coordY, setCoordY] = useState("")
  const handleMouseMove = (e) => {
    //? absolute coordinates
    // console.log("X:", e.pageX);
    // console.log("Y:", e.pageY);
    // console.log("X:", e.clientX);
    // console.log("Y:", e.clientY);

    //? relative coords
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">Mouse Events</h2>

      <div onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)} id='todo-1' className="bg-success text-light w-50 p-4 mt-4">onMouseOver & onMouseLeave</div>
      {visible && <p>Mouse on me</p>}

      <div onDoubleClick={handleDoubleClick} id='todo-2' className="bg-success text-light w-50 p-4 mt-4">onDoubleClick</div>

      <div onMouseMove={handleMouseMove} id='todo-3' className="bg-success text-light w-50 p-4 mt-4"><span>onMouseMove</span> </div>

      <div onMouseOver={} id='todo-4' className="bg-success text-light w-50 p-4 mt-4"><span>onMouseOver</span></div>

      <div id='todo-5' className="bg-success text-light w-50 p-4 mt-4"><span>onMouseEnter</span></div>

      X: {coordX} and Y: {coordY}
    </div>
  )
}

export default MouseEvents;