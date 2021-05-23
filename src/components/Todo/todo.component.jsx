import React from "react";

const Todo = ({ task }) => (
  <div className="todo">
    <button>Edit</button>
    <button>X</button>
    <li>{task}</li>
  </div>
);

export default Todo;
