import TaskRow from "./TaskRow";

const TodoList = ({ tasks, onToggle }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <TaskRow tasks={tasks} onToggle={onToggle} />
      </tbody>
    </table>
  );
};

export default TodoList;
