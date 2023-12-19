import React, { useCallback, useEffect, useState, useMemo } from "react";
import Todo from "./Todo";
import Sort from "./Sort";
import Stats from "./Stats";
import Filter from "./Filter";
import useFlag from "../hooks/use-flag";
import { generateTodos, getRandomString } from "../utils/generate-todos";
import "./styles.css";

export default function App() {
  const [newName, setNewName] = useState("");
  const handleSetName = (ev) => {
    setNewName(ev.target.value);
  };

  const handleIsNameValid = () => {
    return "" !== newName.trim();
  };

  const [todos, setTodos] = useState([]);
  const handleAddTodo = () => {
    if (handleIsNameValid()) {
      const newTodo = {
        id: Date.now() + getRandomString(),
        name: newName,
        time: Date.now(),
        solved: false
      };

      setNewName("");
      setTodos([newTodo].concat(todos));
    } else window.alert("некорректное название задачи!");
  };

  const handleToggleTodo = useCallback((curId) => {
    setTodos((newTodos) =>
      newTodos.map((todo) => {
        return curId === todo.id ? { ...todo, solved: !todo.solved } : todo;
      })
    );
  }, []);

  const handleDeleteTodo = useCallback((curId) => {
    setTodos((newTodos) =>
      newTodos.filter((todo) => {
        return todo.id !== curId;
      })
    );
  }, []);

  const [filterActive, setFilterActive, handleToggleFilterActive] = useFlag();
  const [newFirstSortActive, setNewFirstSortActive] = useState(true);
  const [oldFirstSortActive, setOldFirstSortActive] = useState(false);
  const [alphabeticalSortActive, setAlphabeticalSortActive] = useState(false);
  const [sortType, setSortType] = useState("newFirst");

  const handleSortChenge = useCallback((ev) => {
    const sortType = ev.target.value;
    setSortType(sortType);
  }, []);

  const sortedTodos = useMemo(() => {
    if (sortType === "newFirst") {
      setNewFirstSortActive(true);
      setOldFirstSortActive(false);
      setAlphabeticalSortActive(false);
      return todos.slice().sort((a, b) => b.time - a.time);
    } else if (sortType === "oldFirst") {
      setNewFirstSortActive(false);
      setOldFirstSortActive(true);
      setAlphabeticalSortActive(false);
      return todos.slice().sort((a, b) => a.time - b.time);
    } else if (sortType === "alphabetical") {
      setNewFirstSortActive(false);
      setOldFirstSortActive(false);
      setAlphabeticalSortActive(true);
      return todos.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    return todos;
  }, [todos, sortType]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const todos = generateTodos(10);

    setTimeout(() => {
      setTodos(todos);
      setIsLoading(false);
    }, 700);
  }, []);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="App">
      <Stats todos={todos} />
      <div className="input">
        <input className="inputName" value={newName} onChange={handleSetName} />
        <button className="add_button" onClick={handleAddTodo}>
          Добавить задачу
        </button>
      </div>
      <Sort
        newFirstActive={newFirstSortActive}
        oldFirstActive={oldFirstSortActive}
        alphabeticalActive={alphabeticalSortActive}
        onSortChenge={handleSortChenge}
      />
      <Filter active={filterActive} onActive={handleToggleFilterActive} />
      <div className="todos">
        {filterActive
          ? sortedTodos.map((todo) => {
              if (!todo.solved) {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    time={todo.time}
                    solved={todo.solved}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                  />
                );
              }
              return null;
            })
          : sortedTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                time={todo.time}
                solved={todo.solved}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
      </div>
    </div>
  );
}
