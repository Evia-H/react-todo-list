import React from "react";
import useInputState from "../../hooks/useInputState";
import uuid from "uuid/v4";

const TodoForm = ({ createTodo }) => {
  const [task, updateTask, resetTask] = useInputState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({ task, id: uuid(), completed: false });
    resetTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        type="text"
        placeholder="New Todo"
        id="task"
        name="task"
        value={task}
        onChange={updateTask}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
