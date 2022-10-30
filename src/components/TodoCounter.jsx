import PropTypes from "prop-types";

export const TodoCounter = ({ count, pendingCount, completeCount }) => {
  return (
    <>
      <span className="fw-bold">Tareas: {count}</span>
      <span className="fw-bold">Pendientes: {pendingCount}</span>
      <span className="fw-bold">Completadas: {completeCount}</span>
    </>
  );
};
TodoCounter.propTypes = {
  count: PropTypes.number.isRequired,
  pendingCount: PropTypes.number.isRequired,
  completeCount: PropTypes.number.isRequired,
};
