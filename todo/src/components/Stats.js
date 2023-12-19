import React, { useMemo } from "react";
import "./styles.css";

function Stats(props) {
  const TodoCount = useMemo(() => props.todos.length, [props.todos]);
  const solvedTodoCount = useMemo(
    () => props.todos.filter((todo) => !todo.solved).length,
    [props.todos]
  );
  const unresolvedTodoCount = useMemo(() => TodoCount - solvedTodoCount, [
    TodoCount,
    solvedTodoCount
  ]);

  return (
    <div className="info">
      <div>Всего: {TodoCount}</div>
      <div>Невыполненных: {solvedTodoCount}</div>
      <div>выполненных: {unresolvedTodoCount}</div>
    </div>
  );
}
export default React.memo(Stats);
