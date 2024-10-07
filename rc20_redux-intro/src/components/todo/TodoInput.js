import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/actions/todoActions";


const TodoInput = () => {
const [todo,setTodo]=useState("")

const dispatch=useDispatch()

const handleSubmit=(e)=>{

  e.preventDefault()

  //add func needed

  dispatch(add(todo))
}


  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"

        onChange={(e)=>setTodo(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
