import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Hola soy una tarea",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onCompleteTodoMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Comprobar que existe una tarea", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCompleteTodo={onCompleteTodoMock}
      />
    );
    const li = screen.getByRole("listitem");

    expect(li.className).toContain(
      "list-group-item p-2 d-flex justify-content-between align-items-center"
    );
  });

  test("Comprobar que una tarea esta completada", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCompleteTodo={onCompleteTodoMock}
      />
    );
    const li = screen.getByRole("listitem");

    expect(li.className).toContain(
      "list-group-item p-2 d-flex justify-content-between align-items-center border border-success"
    );
  });

  test('Comprobar que al hacer click en el boton "Eliminar" se llama la funcion "onDeleteTodo" ', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCompleteTodo={onCompleteTodoMock}
      />
    );
    const btnDelete = screen.getByRole("button", { name: "Eliminar" });

    fireEvent.click(btnDelete);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('Comprobar que al hacer click en el boton "Completar" se llama la funcion "onCompleteTodo" ', () => {
    todo.done = false;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCompleteTodo={onCompleteTodoMock}
      />
    );
    const btnComplete = screen.getByRole("button", { name: "Completar" });

    fireEvent.click(btnComplete);

    expect(onCompleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
