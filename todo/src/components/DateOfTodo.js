import React from "react";
import "./styles.css";

const MONTHS = [
  "Янв",
  "Фев",
  "март",
  "Апр",
  "Май",
  "Июнь",
  "Июль",
  "Авг",
  "Сен",
  "Окт",
  "Нояб",
  "дек"
];

function DateOfTodo(props) {
  const todoDate = new Date(props.todoDate);
  const todoYear = todoDate.getFullYear() % 100;
  const todoMonth = todoDate.getMonth();
  const todoDay = todoDate.getDate();
  return (
    <div className="todoDate">
      <span>
        {todoDay} {MONTHS[todoMonth]} {todoYear}
      </span>
    </div>
  );
}

export default React.memo(DateOfTodo);
