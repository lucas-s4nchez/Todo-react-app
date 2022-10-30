import React from "react";

export const TodoItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>Aprender React desde cero con fernando herrera</span>
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-outline-danger ms-2">Eliminar</button>
        <button className="btn btn-outline-success ms-2">Terminada</button>
      </div>
    </li>
  );
};
