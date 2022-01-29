import React, { Component, Fragment } from "react";
import "../../styles/Todo.css";

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoText: "",
            complete: false,
        };
        this.addTodo = this.addTodo.bind(this);
        this.handleTodoText = this.handleTodoText.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    handleTodoText(e) {
        e.preventDefault();
        this.setState({
            todoText: e.target.value,
        });
    }

    addTodo(e) {
        e.preventDefault();
        if (!this.state.todoText) {
            return;
        }
        let data = {
            id: new Date().getTime(),
            text: this.state.todoText,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, data],
            todoText: "",
        });
    }

    toggleTodo(id) {
        let todoF = this.state.todos.find((todo) => todo.id === id);
        todoF.completed = !todoF.completed;

        this.setState({
            todos: this.state.todos.map((todo) =>
                todo.id === id ? todoF : todo
            ),
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    }

    render() {
        let totalCompleted =
            this.state.todos.length > 0
                ? this.state.todos.filter((todo) => todo.completed).length
                : 0;
        return (
            <main className="centering">
                <section className="">
                    <h1 className="center-text mb-1 font-main">THINGS TO DO</h1>
                    {this.state.todos.length > 0 ? (
                        <ul className="m-b-1 list-unstyled">
                            {this.state.todos.map((todo) => (
                                <Fragment key={todo.id}>
                                    <li className="mb-1">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            className="mr-1"
                                            onChange={() =>
                                                this.toggleTodo(todo.id)
                                            }
                                        />
                                        <span
                                            className={
                                                todo.completed
                                                    ? "mr-1 complete-todo"
                                                    : "mr-1"
                                            }
                                        >
                                            {todo.text}
                                        </span>
                                        <span
                                            className="btn-gray"
                                            onClick={() =>
                                                this.removeTodo(todo.id)
                                            }
                                        >
                                            x
                                        </span>
                                    </li>
                                </Fragment>
                            ))}
                        </ul>
                    ) : (
                        <p className="mb-1">
                            Looks like you are absolutely free today
                        </p>
                    )}
                    <section className="todo-form">
                        <form>
                            <h2>DONE {totalCompleted}</h2>
                            <section className="d-flex">
                                <input
                                    type="text"
                                    className="form-input mr-1"
                                    placeholder="Enter a new task"
                                    value={this.state.todoText}
                                    onChange={this.handleTodoText}
                                />
                                <button
                                    type="submit"
                                    className="btn form-input btn-form white-text bg-blue"
                                    onClick={this.addTodo}
                                >
                                    ADD TASK
                                </button>
                            </section>
                        </form>
                    </section>
                </section>
            </main>
        );
    }
}
