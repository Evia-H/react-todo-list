import React, { Component } from "react";
import Todo from "../../components/Todo/todo.component";
import TodoForm from "../../components/TodoForm/todo-form.component";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [{ task: "walk" }, { task: "dance" }] };
    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <TodoForm createTodo={this.create} />
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
