export const TaskState = (props) => {
  const { todos, checkedTasks } = props;
  const allTodoLength = todos.length;
  const checkedTodoLength = checkedTasks.length;
  const notCheckedTodoLength = todos.length - checkedTasks.length;

  return (
    <>
      <p>全てのタスク:{allTodoLength}</p>
      <p>完了済み:{checkedTodoLength}</p>
      <p>未完了:{notCheckedTodoLength}</p>
    </>
  );
};
