import { render, screen, fireEvent } from "@testing-library/react";
import { TodoForm } from "../../src/components/TodoForm";

describe("Pruebas en <TodoForm/>", () => {
  test("Retornar los valores por defecto", () => {
    render(<TodoForm onAddTodo={() => {}} />);
    const input = screen.getByRole("textbox");
    const btnAdd = screen.getByRole("button", { name: "Agregar tarea" });

    expect(input).toBeTruthy();
    expect(btnAdd).toBeTruthy();
  });

  test("Reiniciar el formulario al hacer submit", () => {
    render(<TodoForm onAddTodo={() => {}} />);
    const input = screen.getByRole("textbox");
    const btnAdd = screen.getByRole("button", { name: "Agregar tarea" });

    fireEvent.input(input, { target: { value: "Hola Mundo" } });
    fireEvent.click(btnAdd);

    expect(input.value).toContain("");
  });
});
