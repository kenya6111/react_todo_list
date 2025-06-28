import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
export const Task = (props) => {
  const {
    todos,
    onClickCheck,
    onChangeEdit,
    onClickEdit,
    onClickEditSave,
    onClickDelete,
    editTodo,
  } = props;
  return todos.map((todo) => (
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
            onClickEditSave(todo.id);
          }}
        >
          保存
        </PrimaryButton>
      ) : (
        <PrimaryButton
          onClick={() => {
            onClickEdit(todo.id);
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
  ));
};

const STask = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
