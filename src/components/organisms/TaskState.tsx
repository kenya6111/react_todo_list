export const TaskState = (props) => {
  const { todos } = props;
  const allTodoLength = todos.length;
  const checkedTodoLength = todos.filter((todo) => todo.isChecked).length;
  const notCheckedTodoLength = allTodoLength - checkedTodoLength;

  return (
    <>
      <p>全てのタスク:{allTodoLength}</p>
      <p>完了済み:{checkedTodoLength}</p>
      <p>未完了:{notCheckedTodoLength}</p>
    </>
  );
};
