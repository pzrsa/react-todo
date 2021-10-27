import TaskRow from "./TaskRow";

const TodoList = ({ tasks, handleCompleted }) => {
  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <TaskRow tasks={tasks} onToggle={handleCompleted} />
      </tbody>
    </table>
  );
};

export default TodoList;
