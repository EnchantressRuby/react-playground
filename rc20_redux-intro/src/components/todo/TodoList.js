import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from "./TodoItem";
const TodoList = () => {

  const {orders} =useSelector((state)=>state.todoReducer)
  return (
    <div>
      <div>
        {orders.map((order) => (
          <TodoItem order={order} />
        ))}
      </div>
    </div>
  );
}

export default TodoList