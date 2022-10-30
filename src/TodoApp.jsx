import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {
  return (
    <div className="container">
      <h1 className="my-4">TodoApp</h1>
      <div className="row gap-2 mb-4">
        <TodoCounter />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-5 mb-3">
          <TodoForm />
        </div>
        <div className="col-xs-12 col-md-7">
          <TodoList />
        </div>
      </div>
    </div>
  );
};
