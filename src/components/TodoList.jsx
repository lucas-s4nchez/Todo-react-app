import React from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
};
