import React, { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [formState, setFormState] = useState({
    description: "",
  });
  const onInputChange = ({ target }) => {
    setFormState((value) => ({ ...value, [target.name]: target.value }));
  };
  const onResetForm = () => {
    setFormState({
      description: "",
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (formState.description.trim().length < 1) {
      alert("Escribe algo");
      return;
    }
    const newTodo = {
      id: Date.now(),
      description: formState.description.trim(),
      done: false,
    };
    onAddTodo(newTodo);
    onResetForm();
  };
  return (
    <form>
      <input
        className="form-control"
        type="text"
        name="description"
        value={formState.description}
        onChange={onInputChange}
      />
      <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2">
        Agregar tarea
      </button>
    </form>
  );
};
