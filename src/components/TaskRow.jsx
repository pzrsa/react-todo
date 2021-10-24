const TaskRow = ({ tasks, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.name}</td>
          <td>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => onToggle(task.id, e.target.checked)}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default TaskRow;
