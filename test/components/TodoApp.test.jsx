import { render, screen, fireEvent } from "@testing-library/react";
import { TodoApp } from "../../src/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";
jest.mock("../../src/hooks/useTodo");

describe("Pruebas en <TodoApp/>", () => {
  useTodo.mockReturnValue({
    todoState: [
      { id: 1, description: "Hola", done: false },
      { id: 2, description: "Chau", done: true },
    ],
    todoCount: 2,
    todoPendingCount: 1,
    todoCompleteCount: 1,
    handleAddTodoMock: jest.fn(),
    handleCompleteTodoMock: jest.fn(),
    handleDeleteTodoMock: jest.fn(),
  });
  afterAll(() => jest.clearAllMocks());

  test("Comprobar que el componente se muestra correctamente", () => {
    render(<TodoApp />);

    expect(screen.getByText("Chau")).toBeTruthy();
    expect(screen.getByText("TodoApp")).toBeTruthy();
    expect(screen.getByText("Tareas: 2")).toBeTruthy();
    expect(screen.getByText("Pendientes: 1")).toBeTruthy();
  });
});
