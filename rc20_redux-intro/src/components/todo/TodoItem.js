import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { del } from "../../redux/actions/todoActions";


const TodoItem = ({order}) => {

const dispatchh=useDispatch()

  return (
    <div
    style={{textDecoration:order.completed ? "line-through": "none",
    background:order.completed ? "lightgray": "orange"
    
    
    }}
      className="todo-list"
    >
      <h2 className="todoText">{order.text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
           

          
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"

            onClick={()=>dispatchh(del(order.id))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
