import { render, screen } from "@testing-library/react";
import { TodoList } from "../../src/components/TodoList";

describe("Pruebas en <TodoList/>", () => {
  const todos = [
    { id: 1, description: "Hola", done: false },
    { id: 1, description: "Hola", done: true },
  ];
  const onDeleteTodoMock = jest.fn();
  const onCompleteTodoMock = jest.fn();

  test("Comprobar que se muestran los todos que recibe por props ", () => {
    render(
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodoMock}
        onCompleteTodo={onCompleteTodoMock}
      />
    );
    const todoItems = screen.getAllByRole("listitem");

    expect(todoItems.length).toBe(2);
  });
});
