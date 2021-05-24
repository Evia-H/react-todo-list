import React, { useState } from "react";
import Todo from "../../components/Todo/todo.component";
import TodoForm from "../../components/TodoForm/todo-form.component";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, task) => {
    setTodos((todos) =>
      todos.map((t) => {
        if (t.id === id) return { ...t, task };
        else return t;
      })
    );
  };

  return (
    <div className="todo-list">
      <TodoForm createTodo={create} />
      <h1>Todo List!</h1>
      <ul>
        {todos.map(({ id, task }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            removeTodo={remove}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
