import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
export const SearchInput = (props) => {
  const { inputTodo, onChangeTodo, onClickSave } = props;
  return (
    <>
      <Input
        value={inputTodo}
        onChange={onChangeTodo}
        placeholder="タスクを入力"
      />
      <PrimaryButton onClick={onClickSave}>保存</PrimaryButton>
    </>
  );
};
