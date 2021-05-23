import React, { Component } from "react";
import Todo from "../../components/Todo/todo.component";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [{ task: "walk" }, { task: "dance" }] };
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <h1>Todo List!</h1>
        <ul>
          {todos.map(({ task }) => (
            <Todo task={task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
