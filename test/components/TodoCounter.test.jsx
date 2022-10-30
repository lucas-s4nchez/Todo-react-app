import { render, screen, fireEvent } from "@testing-library/react";
import { TodoCounter } from "../../src/components/TodoCounter";

describe("Pruebas en <TodoCounter/>", () => {
  test("Retornar los valores por defecto", () => {
    render(<TodoCounter />);

    expect(screen.getByText("Tareas:")).toBeTruthy();
    expect(screen.getByText("Pendientes:")).toBeTruthy();
    expect(screen.getByText("Completadas:")).toBeTruthy();
  });
});
