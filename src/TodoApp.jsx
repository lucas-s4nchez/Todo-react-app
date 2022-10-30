import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
  const {
    todoState,
    todoCount,
    todoPendingCount,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  } = useTodo();
  return (
    <div className="container">
      <h1 className="my-4">TodoApp</h1>
      <div className="row gap-2 mb-4">
        <TodoCounter count={todoCount} pendingCount={todoPendingCount} />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-5 mb-3">
          <TodoForm onAddTodo={handleAddTodo} />
        </div>
        <div className="col-xs-12 col-md-7">
          <TodoList
            todos={todoState}
            onDeleteTodo={handleDeleteTodo}
            onCompleteTodo={handleCompleteTodo}
          />
        </div>
      </div>
    </div>
  );
};
