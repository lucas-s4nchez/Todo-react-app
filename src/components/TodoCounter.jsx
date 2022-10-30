import React from "react";

export const TodoCounter = ({ count, pendingCount, completeCount }) => {
  return (
    <>
      <span className="fw-bold">Tareas: {count}</span>
      <span className="fw-bold">Pendientes: {pendingCount}</span>
      <span className="fw-bold">Completadas: {completeCount}</span>
    </>
  );
};
