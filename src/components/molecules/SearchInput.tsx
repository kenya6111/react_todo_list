import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
export const SearchInput = (props) => {
  const { inputTodo, onChangeTodo, placeholder, onClickSave } = props;
  return (
    <>
      <Input
        value={inputTodo}
        onChange={onChangeTodo}
        placeholder={placeholder}
      />
      <PrimaryButton onClick={onClickSave}>保存</PrimaryButton>
    </>
  );
};
