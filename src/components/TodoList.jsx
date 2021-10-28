import TaskRow from "./TaskRow";

const TodoList = ({ tasks, handleCompleted }) => {
  return (
    <table
      style={{
        tableLayout: "fixed",
        width: "250px",
      }}
    >
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
