import React, { useState, useEffect } from "react";
import Todo from "../../components/Todo/todo.component";
import TodoForm from "../../components/TodoForm/todo-form.component";
import "./todo-list.styles.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

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
        {todos.map(({ id, task, ...restProps }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            {...restProps}
            removeTodo={remove}
            editTodo={editTodo}
          />
        ))}
      </ul>

      <div className="counter">
        <h1>you clicked:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </div>
  );
};

export default TodoList;
