import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onCompleteTodo }) => {
  return (
    <li
      className={`list-group-item p-2 d-flex justify-content-between align-items-center ${
        todo.done ? "border border-success" : ""
      } `}
    >
      <span>{todo.description}</span>
      <div className="d-flex flex-column gap-2">
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-outline-danger ms-2"
        >
          Eliminar
        </button>
        <button
          onClick={() => onCompleteTodo(todo.id)}
          className={` btn ${
            todo.done ? "btn-success" : "btn-outline-success"
          } ms-2`}
        >
          {todo.done ? "Completada" : "Completar"}
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
};
