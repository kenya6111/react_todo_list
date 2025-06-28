import { useState } from "react";
import "../../App.css";
import { Task } from "../organisms/Task";
import { TaskState } from "../organisms/TaskState";
import { SearchInput } from "../molecules/SearchInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
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

  const onClickEdit = (id) => {
    const currentTodos = [...todos];
    const targetTodo = todos.find((t) => t.id === id);
    const currentTitle = targetTodo.title;
    targetTodo.isEdit = true;
    setTodos(currentTodos);
    setEditTodo(currentTitle);
  };

  const onChangeEdit = (e) => {
    const editText = e.target.value;
    setEditTodo(editText);
  };

  const onClickEditSave = (id) => {
    const currentTodos = [...todos];
    const targetTodo = todos.find((t) => t.id === id);
    targetTodo.title = editTodo;
    targetTodo.isEdit = false;
    setTodos(currentTodos);
  };

  return (
    <>
      <TaskState todos={todos} />
      <SearchInput
        inputTodo={inputTodo}
        onChangeTodo={onChangeTodo}
        onClickSave={onClickSave}
      />
      <Task
        todos={todos}
        onClickCheck={onClickCheck}
        onChangeEdit={onChangeEdit}
        onClickEditSave={onClickEditSave}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
