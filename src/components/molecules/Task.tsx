import styled from "styled-components";
import { Check } from "../atoms/input/Check";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Edit } from "../atoms/input/Edit";
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
  return todos.map((todo, index) => (
    <STask key={todo.id}>
      <Check
        type="checkbox"
        onClick={() => {
          onClickCheck(todo.id);
        }}
      />
      {todo.isEdit ? (
        <Edit
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
            onClickEditSave(index);
          }}
        >
          保存
        </PrimaryButton>
      ) : (
        <PrimaryButton
          onClick={() => {
            onClickEdit(index);
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
