import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos"));
export const useTodo = () => {
  const [todoState, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  }, [todoState]);

  const handleAddTodo = (todo) => {
    dispatch({
      type: "Ad Todo",
      payload: todo,
    });
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Delete Todo",
      payload: id,
    });
  };
  const handleCompleteTodo = (id) => {
    dispatch({
      type: "Complete Todo",
      payload: id,
    });
  };
  const todoCount = todoState.length;
  const todoPendingCount = todoState.filter((todo) => !todo.done).length;

  return {
    todoState,
    todoCount,
    todoPendingCount,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  };
};
