import React, { useState } from "react";
import useToggleState from "../../hooks/useToggleState";
import "./todo.styles.css";

const Todo = ({ id, task, completed, removeTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState(task);
  const [completedTask, toggleCompletedTask] = useToggleState(completed);

  const handleUpdate = (event) => {
    event.preventDefault();
    editTodo(id, todo);
    setIsEdit(false);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return isEdit ? (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="text" onChange={handleChange} value={todo} />
        <button type="submit">Save</button>
      </form>
    </div>
  ) : (
    <div className="todo">
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => removeTodo(id)}>X</button>
      <li
        onClick={toggleCompletedTask}
        className={completedTask ? "completed" : ""}
      >
        {task}
      </li>
    </div>
  );
};

export default Todo;
