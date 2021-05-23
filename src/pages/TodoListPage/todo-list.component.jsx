import React, { Component } from "react";
import Todo from "../../components/Todo/todo.component";
import TodoForm from "../../components/TodoForm/todo-form.component";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <TodoForm createTodo={this.create} />
        <h1>Todo List!</h1>
        <ul>
          {todos.map(({ id, task }) => (
            <Todo key={id} id={id} task={task} removeTodo={this.remove} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
