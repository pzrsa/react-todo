import TaskRow from "./TaskRow";

const TodoList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <TaskRow taskName="Clean dishes" taskStatus="Todo" />
      <TaskRow taskName="Fix garage" taskStatus="Done" />
    </table>
  );
};

export default TodoList;
