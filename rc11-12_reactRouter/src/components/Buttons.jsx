import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
  const navigate=useNavigate()
  
  return (
    <div className="text-center">
      <Button
        className="btn btn-danger p-4 m-2 w-25"
      onClick={()=>navigate("/login")}
      >
        LOGIN
      </Button>
      <Button className="btn btn-danger p-4 m-2 w-25">Close</Button>
      <Button className="btn btn-danger p-4 m-2 w-25">Delete</Button>
    </div>
  );
}

export default Buttons