import { useState } from "react";
import "../../App.css";
import { Tasks } from "../organisms/Tasks";
import { TaskState } from "../organisms/TaskState";
import { SearchInput } from "../molecules/SearchInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const onClickSave = () => {
    if (!inputTodo) return;
    const newTodo = {
      id: uuidv4(),
      title: inputTodo,
      isEdit: false,
      isChecked: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setInputTodo("");
  };

  const onClickDelete = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onClickCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <TaskState todos={todos} />
      <SearchInput
        inputTodo={inputTodo}
        onChangeTodo={onChangeTodo}
        onClickSave={onClickSave}
      />
      <Tasks
        todos={todos}
        setTodos={setTodos}
        onClickCheck={onClickCheck}
        onClickDelete={onClickDelete}
      />
    </>
  );
}

export default App;
