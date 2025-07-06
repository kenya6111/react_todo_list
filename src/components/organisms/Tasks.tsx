import { Task } from "./Task";
export const Tasks = (props) => {
  const { todos, setTodos, onClickCheck, onClickDelete } = props;

  return todos.map((todo) => (
    <Task
      key={todo.id}
      todos={todos}
      setTodos={setTodos}
      todo={todo}
      onClickCheck={onClickCheck}
      onClickDelete={onClickDelete}
    />
  ));
};
