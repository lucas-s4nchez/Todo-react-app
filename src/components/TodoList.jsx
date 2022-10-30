import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo, onCompleteTodo }) => {
  return (
    <ul className="list-group gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
};
