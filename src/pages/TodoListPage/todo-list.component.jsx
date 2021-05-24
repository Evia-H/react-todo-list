import React, { useState, useEffect } from "react";
import Todo from "../../components/Todo/todo.component";
import TodoForm from "../../components/TodoForm/todo-form.component";
import axios from "axios";
import "./todo-list.styles.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${number}/`
      );
      setUser(response.data);
    }
    getData();
  }, [number]);

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

      <div className="user-selector">
        <h1>Pick A User</h1>
        <h4>{user.title}</h4>
        <select value={number} onChange={(e) => setNumber(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
    </div>
  );
};

export default TodoList;
