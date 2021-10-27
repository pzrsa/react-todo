import TaskRow from "./TaskRow";

const TodoList = ({ tasks, onToggle }) => {
  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <TaskRow tasks={tasks} onToggle={onToggle} />
      </tbody>
    </table>
  );
};

export default TodoList;
