import { useState } from "react";
import "../../App.css";
import { Task } from "../molecules/Task";
import { TaskState } from "../organisms/TaskState";
import { SearchInput } from "../molecules/SearchInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);
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
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setInputTodo("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    const targetTodo = todos[index];
    setCheckedTasks((prev) =>
      prev.includes(targetTodo) ? prev.filter((p) => p !== targetTodo) : prev
    );
  };

  const onClickCheck = (index) => {
    const targetTodo = todos[index];
    setCheckedTasks((prev) =>
      prev.includes(targetTodo)
        ? prev.filter((t) => t !== targetTodo)
        : [...prev, targetTodo]
    );
  };

  const onClickEdit = (index) => {
    const currentTodos = [...todos];
    const currentTitle = currentTodos[index].title;
    currentTodos[index].isEdit = !currentTodos[index].isEdit;
    setTodos(currentTodos);
    setEditTodo(currentTitle);
  };

  const onChangeEdit = (e) => {
    const editText = e.target.value;
    setEditTodo(editText);
  };

  const onClickEditSave = (index) => {
    const currentTodos = [...todos];
    currentTodos[index].title = editTodo;
    currentTodos[index].isEdit = !currentTodos[index].isEdit;
    setTodos(currentTodos);
  };

  return (
    <>
      <TaskState todos={todos} checkedTasks={checkedTasks} />
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
