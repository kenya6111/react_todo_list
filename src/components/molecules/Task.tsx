import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { useState } from "react";
export const Task = (props) => {
  const { todos, todo, setTodos, onClickCheck, onClickDelete } = props;

  const [editTodo, setEditTodo] = useState("");

  const onClickEdit = () => {
    const currentTodos = [...todos];
    const targetTodo = todos.find((t) => t.id === todo.id);
    targetTodo.isEdit = true;
    setEditTodo(targetTodo.title);
    setTodos(currentTodos);
  };

  const onChangeEdit = (e) => {
    setEditTodo(e.target.value);
  };

  const onClickEditSave = () => {
    const currentTodos = [...todos];
    const targetTodo = todos.find((t) => t.id === todo.id);
    targetTodo.isEdit = false;
    targetTodo.title = editTodo;
    setTodos(currentTodos);
  };

  return (
    <STask key={todo.id}>
      <Input
        type="checkbox"
        onClick={() => {
          onClickCheck(todo.id);
        }}
      />
      {todo.isEdit ? (
        <Input
          value={editTodo}
          onChange={onChangeEdit}
          placeholder="タスクを変更"
        />
      ) : (
        <p>{todo.title}</p>
      )}
      {todo.isEdit ? (
        <PrimaryButton
          onClick={() => {
            onClickEditSave();
          }}
        >
          保存
        </PrimaryButton>
      ) : (
        <PrimaryButton
          onClick={() => {
            onClickEdit();
          }}
        >
          編集
        </PrimaryButton>
      )}
      <PrimaryButton
        onClick={() => {
          onClickDelete(todo.id);
        }}
      >
        削除
      </PrimaryButton>
    </STask>
  );
};

const STask = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
