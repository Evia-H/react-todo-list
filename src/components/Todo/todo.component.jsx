import React from "react";

const Todo = ({ id, task, removeTodo }) => (
  <div className="todo">
    <button>Edit</button>
    <button onClick={() => removeTodo(id)}>X</button>
    <li>{task}</li>
  </div>
);

export default Todo;
