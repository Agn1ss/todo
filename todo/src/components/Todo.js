import React from "react";
import DateOfTodo from "./DateOfTodo";
import "./styles.css";

function Todo(props) {
  return (
    <div className="todo">
      <div className="todoCheckbox">
        <input
          type="checkbox"
          checked={props.solved}
          onChange={() => props.onToggle(props.id)}
        />
        <span>{props.name}</span>
      </div>
      <DateOfTodo todoDate={props.time}></DateOfTodo>
      <button
        className="delete_button"
        onClick={() => props.onDelete(props.id)}
      >
        удалить
      </button>
    </div>
  );
}

export default React.memo(Todo);
