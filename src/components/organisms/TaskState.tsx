export const TaskState = (props) => {
  const { todos, checkedTasks } = props;
  return (
    <>
      <p>全てのタスク:{todos.length}</p>
      <p>完了済み:{checkedTasks.length}</p>
      <p>未完了:{todos.length - checkedTasks.length}</p>
    </>
  );
};
