import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
export const SearchInput = (props) => {
  const { inputTodo,onChangeTodo,placeholder,onClickAdd} = props;
  return (
    <>
      <Input value={inputTodo} onChange={onChangeTodo} placeholder={placeholder}/>
      <PrimaryButton onClick={onClickAdd}>保存</PrimaryButton>
    </>
  );
};


