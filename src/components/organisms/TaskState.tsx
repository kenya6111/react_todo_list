export const TaskState = (props) => {
  const { todos, checkedItems } = props;
  return (
    <>
      <p>全てのタスク:{todos.length}</p>
      <p>完了済み:{checkedItems.length}</p>
      <p>未完了:{todos.length - checkedItems.length}</p>
    </>
  );
};
