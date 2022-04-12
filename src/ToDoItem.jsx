import React from 'react';
import { useDispatch } from 'react-redux';


const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch()
  
  return (
    <li 
      onClick={() => dispatch( {type: "todo/complete", payload: todo }) }
      style={{textDecoration: todo.completed ? "line-through" : "none"}}
    >
      { todo.title }
    </li>
  );
}

export default ToDoItem;
